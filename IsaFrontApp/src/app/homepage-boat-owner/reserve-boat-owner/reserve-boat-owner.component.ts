import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserve-boat-owner',
  templateUrl: './reserve-boat-owner.component.html',
  styleUrls: ['./reserve-boat-owner.component.css']
})
export class ReserveBoatOwnerComponent implements OnInit {

  user: any = {} as any;
  todayDate:Date = new Date();
  clientId: any;
  boatId: any;
  boat:any = {} as any;
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
      this.boatId = params.boatId;
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
    this.api.loadOneBoat(this.boatId).subscribe((response:any) => {
      this.boat = response;
    });
    this.api.loadOneUserInfo(this.clientId).subscribe((response: any) => {
      this.client = response;
    });
  }

  logout(): void{
    localStorage.clear();
  }

  onSubmit() {

    const extraServices = this.form.get('extraService')?.value;
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;

    let data = {
      clientId: this.clientId,
      startDate: startDate,
      boatId: this.boatId,
      endDate: endDate,
      extraServices: extraServices,
      pricelist: this.pricelist,
      name: this.name,
      address: this.address
    }

    this.api.bookByOwnerBoat(data).subscribe((response: any) => {
      console.log(response);
      if(response != null){
        this.boat = response;
        this._snackBar.open('The reservation was successfully completed!', 'Close');
        this.router.navigate(['/history-boat-owner']);
      }
      if(response == null){
        this._snackBar.open('Sorry, you can not book this boat for dates you entered. Please, try again.', 'Close', {duration: 5000})
      } 
  });
  }

}
