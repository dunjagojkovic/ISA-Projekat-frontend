import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserve-cottages-standard',
  templateUrl: './reserve-cottages-standard.component.html',
  styleUrls: ['./reserve-cottages-standard.component.css']
})
export class ReserveCottagesStandardComponent implements OnInit {

  user: any = {} as any;
  todayDate:Date = new Date();
  id: any;
  house:any = {} as any;
  form: FormGroup;
  startDate:any;
  endDate:any;
  name:any;
  pricelist: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private formBuilder : FormBuilder,
    private _snackBar: MatSnackBar
  ) { 

    this.route.queryParams
    .subscribe(params => {
      this.id = params.id;
      this.startDate = new Date(params.startDate);
      this.endDate = new Date(params.endDate);
    });
    
    this.form = this.formBuilder.group({
        extraServices: ['']
    })
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;     
  });
  
  this.api.loadOneHouse(this.id).subscribe((response:any) => {
    this.house = response;
  });
  }

  onSubmit() {
   
    const extraService = this.form.get('extraServices')?.value;

  if(this.isPenalty()){
    let data = {
      name: this.name,
      extraServices: extraService,
      startDate: this.startDate,
      endDate: this.endDate,
      houseId: this.id,
      pricelist: this.pricelist
    }
    console.log(data)

    this.api.bookHouse(data).subscribe((response: any) => {
        console.log(response);
        if(response != null){
          this.house = response;
          this.router.navigate(['/reservations-client']);
          this._snackBar.open('Thank you for your reservation', 'Close');

        }
        if(response == null){
          this._snackBar.open('Sorry the house is booked in the meantime.  If you are flexible, check out some alternative dates.', 'Close', {duration: 5000})
        } 
       
    });
  }

  
}

logout() {
  this.user = localStorage.clear();
  this.router.navigate(['/']);
}

isPenalty(){
  if(this.user.penalty >= 3)
    return this._snackBar.open('Sorry but you have more than 2 penalties!', 'Close', {duration: 5000});
  return true;
}
 

}
