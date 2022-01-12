import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserve-house-owner',
  templateUrl: './reserve-house-owner.component.html',
  styleUrls: ['./reserve-house-owner.component.css']
})
export class ReserveHouseOwnerComponent implements OnInit {

  user: any = {} as any;
  todayDate:Date = new Date();
  clientId: any;
  houseId: any;
  house:any = {} as any;
  form: FormGroup;
  startDate:any;
  endDate:any;
  pricelist: any;
  name:any;
  reservation: any;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private formBuilder : FormBuilder,
    private _snackBar: MatSnackBar
  ) {

    this.route.queryParams
    .subscribe(params => {
      this.clientId = params.clientId;
      this.houseId = params.houseId;
    });

    this.form = this.formBuilder.group({
      extraServices: [''],
      startDate: [''],
      endDate: ['']
  })

   }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;     
  });
  this.api.loadOneHouseReservation(this.houseId).subscribe((response:any) => {
    this.house = response;
  });
  }

  onSubmit() {

    const extraServices = this.form.get('extraService')?.value;
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;

    let data = {
      clientId: this.clientId,
      startDate: startDate,
      houseId: this.houseId,
      endDate: endDate,
      extraServices: extraServices,
      pricelist: this.pricelist,
      name: this.name
    }

    this.api.bookByOwnerHouse(data).subscribe((response: any) => {
      console.log(response);
      if(response != null){
        this.house = response;
        this.router.navigate(['/history-house-owner']);
        this._snackBar.open('Thank you for your reservation', 'Close');

      }
      if(response == null){
        this._snackBar.open('Sorry the house is booked in the meantime.  If you are flexible, check out some alternative dates.', 'Close', {duration: 5000})
      } 
     
  });
  }

  logout(): void{
    localStorage.clear();
  }

}
