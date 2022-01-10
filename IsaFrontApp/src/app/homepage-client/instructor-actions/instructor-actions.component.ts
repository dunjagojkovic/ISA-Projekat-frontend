import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-instructor-actions',
  templateUrl: './instructor-actions.component.html',
  styleUrls: ['./instructor-actions.component.css']
})
export class InstructorActionsComponent implements OnInit {

  actions = [] as any; 
  todayDate: Date = new Date();
  instructor: any = {} as any; 

  constructor(
    private router: Router,
    private api: ApiService,   
    private _snackBar: MatSnackBar
  ) {  }

  ngOnInit(): void {
      this.api.getAllInstructorsOnActions().subscribe((response: any) => {
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
      name:  action.adventureProfile.name,
      extraServices: action.adventureProfile.extraServices,
      startDate:  action.startDate,
      endDate: action.endDate,
      adventureId:  action.adventureProfile.id,
      pricelist: action.actionPrice
    }  

    this.api.bookInstructor(data).subscribe((response: any) => {
        console.log(response);
        if(response != null){
          this.instructor = response;
          this.router.navigate(['/reservations-client']);
          this._snackBar.open('Thank you for your reservation', 'Close');
        }
        if(response == null){
          this._snackBar.open('Sorry the instructor is booked in the meantime.  If you are flexible, check out some alternative dates.', 'Close', {duration: 5000})
        } 
       
    });

}

}
