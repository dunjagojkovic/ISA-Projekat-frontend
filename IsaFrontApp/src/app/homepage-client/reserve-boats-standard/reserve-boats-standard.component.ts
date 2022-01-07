import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserve-boats-standard',
  templateUrl: './reserve-boats-standard.component.html',
  styleUrls: ['./reserve-boats-standard.component.css']
})
export class ReserveBoatsStandardComponent implements OnInit {

  user: any = {} as any;
  todayDate:Date = new Date();
  id: any;
  boat:any = {} as any;
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
  
  this.api.loadOneBoat(this.id).subscribe((response:any) => {
    this.boat = response;
    console.log(response);
    });

  }

  onSubmit() {
   
    const extraServices = this.form.get('extraService')?.value;

    let data = {
      name: this.name,
      extraServices: extraServices,
      startDate: this.startDate,
      endDate: this.endDate,
      boatId: this.id,
      pricelist: this.pricelist
    }

    this.api.bookBoat(data).subscribe((response: any) => {
        console.log(response);
        if(response != null){
          this.boat = response;
          this.router.navigate(['/reservations-client']);
          this._snackBar.open('Thank you for your reservation', 'Close');

        }
        if(response == null){
          this._snackBar.open('Sorry the boat is booked in the meantime. If you are flexible, check out some alternative dates.', 'Close', {duration: 5000})
        } 
       
      });
  }

} 