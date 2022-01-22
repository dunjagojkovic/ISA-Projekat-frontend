import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservations-client',
  templateUrl: './reservations-client.component.html',
  styleUrls: ['./reservations-client.component.css']
})
export class ReservationsClientComponent implements OnInit {

  houseBox : boolean = true;
  boatBox : boolean = false;
  instructorBox : boolean = false;
  upcommingTable: boolean = true;
  historyTable: boolean = false;

  houseReservations = [] as any;
  boatReservations = [] as any;
  instructorReservations = [] as any;
  user: any = {} as any;
  today:Date = new Date();
  endDate: any;

  constructor(
    private api: ApiService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.getMyHouseUpcomingReservations().subscribe((response: any) => {
      this.houseReservations = response;
      console.log(response);     
      });

    this.api.getMyBoatUpcomingReservations().subscribe((response: any) => {
        this.boatReservations = response;
        console.log(response);
        });

      this.api.getMyInstructorUpcomingReservations().subscribe((response: any) => {
          this.instructorReservations = response;
          console.log(response);
          });

      this.api.current().subscribe((response:any) => {
            this.user = response;     
        });

  }

  HouseFinishedReservations() {
    this.historyTable = true; 
    this.upcommingTable = false;
    this.api.getMyHouseFinishedReservations().subscribe((response: any) => {
      this.houseReservations = response;
      console.log(response);     
      });
  }
   
  HouseUpcomingReservations() {
    this.historyTable = false; 
    this.upcommingTable = true;
    this.api.getMyHouseUpcomingReservations().subscribe((response: any) => {
      this.houseReservations = response;
      console.log(response);     
      });
  }

  BoatUpcomingReservations() {
    this.historyTable = false; 
    this.upcommingTable = true;
    this.api.getMyBoatUpcomingReservations().subscribe((response: any) => {
      this.boatReservations = response;
      console.log(response);     
      });
  }

  BoatFinishedReservations() {
    this.historyTable = true; 
    this.upcommingTable = false;
    this.api.getMyBoatFinishedReservations().subscribe((response: any) => {
      this.boatReservations = response;
      console.log(response);     
      });
  }

  InstructorFinishedReservations() {
    this.historyTable = true; 
    this.upcommingTable = false;
    this.api.getMyInstructorFinishedReservations().subscribe((response: any) => {
      this.instructorReservations = response;
      console.log(response);     
      });
  }
   
  InstructorUpcomingReservations() {
    this.historyTable = false; 
    this.upcommingTable = true;
    this.api.getMyInstructorUpcomingReservations().subscribe((response: any) => {
      this.instructorReservations = response;
      console.log(response);     
      });
  }
    
  cancelHouse(id: number){
    this.api.cancelHouseReservation(id).subscribe((response:any) => {      {
      this.houseReservations = response;
      console.log(response);
      if(response == true){
       this._snackBar.open('You have successfully canceled your reservation. ', 'Close', {duration: 5000});   
       window.location.reload();
         } else if (response == false){
          this._snackBar.open('Cannot cancel. ', 'Close', {duration: 3000});       
         }

    }
    });
  }

  cancelBoat(id: number){
    this.api.cancelBoatReservation(id).subscribe((response:any) => {      {
      this.boatReservations = response;
      console.log(response);
      if(response == true){
       this._snackBar.open('You have successfully canceled your reservation. ', 'Close', {duration: 5000});   
       window.location.reload();
         } else if (response == false){
          this._snackBar.open('Cannot cancel. ', 'Close', {duration: 3000});       
         }

    }
    });
  }

  cancelInstructor(id: number){
    this.api.cancelInstructorReservation(id).subscribe((response:any) => {      {
      this.instructorReservations = response;
      console.log(response);
      if(response == true){
       // this.houseReservations = this.houseReservations.filter((e:any) => e.id != id);  
       this._snackBar.open('You have successfully canceled your reservation. ', 'Close', {duration: 5000});   
       window.location.reload();
         } else if (response == false){
          this._snackBar.open('Cannot cancel. ', 'Close', {duration: 3000});       
          //alert('Cannot cancel.')   
         }

    }
    });
  }

  logout() {
    this.user = localStorage.clear();
    this.router.navigate(['/']);
  }

}
