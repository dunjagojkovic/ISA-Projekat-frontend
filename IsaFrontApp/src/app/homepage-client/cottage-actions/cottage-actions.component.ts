import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-cottage-actions',
  templateUrl: './cottage-actions.component.html',
  styleUrls: ['./cottage-actions.component.css']
})
export class CottageActionsComponent implements OnInit {

  houses = [] as any;
  actions = [] as any;
  startDate: any;
  endDate: any;
  user: any = {} as any;
  todayDate:Date = new Date();
  id: any;
  house:any = {} as any;
  extraServices: any;

  name:any;
  pricelist: any;
  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder : FormBuilder,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
      this.api.getAllHousesOnActions().subscribe((response: any) => {
        this.actions = response;
        console.log(response);
        });

  }

  onSubmit(id:any) {

    let action: any;

    for(let a of this.actions) {
        if(a.id === id) {
          action = a;
        }
    }
    let data = {
      name:  action.homeProfile.name,
      extraServices: action.homeProfile.extraServices,
      startDate:  action.startDate,
      endDate: action.endDate,
      houseId:  action.homeProfile.id,
      pricelist: action.actionPrice
    }

  

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
