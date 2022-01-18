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
  client: any;
  address : any;
  
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
  this.api.loadOneHouse(this.houseId).subscribe((response:any) => {
    this.house = response;
  });
  this.api.loadOneUserInfo(this.clientId).subscribe((response: any) => {
    this.client = response;
  });
  }

  onSubmit() {

    const extraService = this.form.get('extraService')?.value;
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;

    let data = {
      clientId: this.clientId,
      startDate: startDate,
      houseId: this.houseId,
      endDate: endDate,
      extraServices: extraService,
      pricelist: this.pricelist,
      name: this.name,
      address: this.address
    }

    this.api.bookByOwnerHouse(data).subscribe((response: any) => {
      console.log(response);
      if(response != null){
        this.house = response;
        this.router.navigate(['/history-house-owner']);
        this._snackBar.open('The reservation was successfully completed!', 'Close');
      }
      if(response == null){
        this._snackBar.open('Sorry, you can not book this house for dates you entered. Please, try again.', 'Close', {duration: 5000})
      } 
  });
  }

  logout(): void{
    localStorage.clear();
  }

}
