import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-boat-actions',
  templateUrl: './boat-actions.component.html',
  styleUrls: ['./boat-actions.component.css']
})
export class BoatActionsComponent implements OnInit {

  actions = [] as any; 
  todayDate:Date = new Date();
  boat:any = {} as any; 

  constructor(
    private router: Router,
    private api: ApiService,   
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.api.getAllBoatsOnActions().subscribe((response: any) => {
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
    name:  action.boatProfile.name,
    extraServices: action.boatProfile.extraServices,
    startDate:  action.startDate,
    endDate: action.endDate,
    boatId:  action.boatProfile.id,
    pricelist: action.actionPrice
  }  

  this.api.bookBoat(data).subscribe((response: any) => {
      console.log(response);
      if(response != null){
        this.boat = response;
        this.router.navigate(['/reservations-client']);
        this._snackBar.open('Thank you for your reservation', 'Close');
      }
      if(response == null){
        this._snackBar.open('Sorry the boat is booked in the meantime.  If you are flexible, check out some alternative dates.', 'Close', {duration: 5000})
      } 
     
  });

}

}
