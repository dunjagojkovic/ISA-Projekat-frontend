import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-cottage-actions',
  templateUrl: './cottage-actions.component.html',
  styleUrls: ['./cottage-actions.component.css']
})
export class CottageActionsComponent implements OnInit {

  actions = [] as any; 
  todayDate:Date = new Date();
  house:any = {} as any; 
  user: any = {} as any;
  id: any;
  subscriptions = [] as any;

  constructor(
    private router: Router,
    private api: ApiService,   
    private _snackBar: MatSnackBar
  ) {  }

  ngOnInit(): void {
      this.api.getAllHousesOnActions().subscribe((response: any) => {
        this.actions = response;
        console.log(response);
        });
      this.api.current().subscribe((response:any) => {
          this.user = response;     
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
      pricelist: action.actionPrice,
      clientId: this.user.id
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

logout() {
  this.user = localStorage.clear();
  this.router.navigate(['/']);
}

}
