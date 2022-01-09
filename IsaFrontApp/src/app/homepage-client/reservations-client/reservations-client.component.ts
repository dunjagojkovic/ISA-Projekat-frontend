import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-reservations-client',
  templateUrl: './reservations-client.component.html',
  styleUrls: ['./reservations-client.component.css']
})
export class ReservationsClientComponent implements OnInit {

  houseReservations = [] as any;
  boatReservations = [] as any;
  instructorReservations = [] as any;
  user: any = {} as any;
  today:Date = new Date();
  endDate: any;

  constructor(
    private api: ApiService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.api.getMyHouseReservations().subscribe((response: any) => {
      this.houseReservations = response;
      console.log(response);
      });

    this.api.getMyBoatReservations().subscribe((response: any) => {
        this.boatReservations = response;
        console.log(response);
        });

      this.api.getMyInstructorReservations().subscribe((response: any) => {
          this.instructorReservations = response;
          console.log(response);
          });

      this.api.current().subscribe((response:any) => {
            this.user = response;     
        });

  }

  getFinishedHouseReservations(reservation: any): void{    
      if(reservation.endDate > this.today){
        this.houseReservations.push(reservation);
      }
    }
    
  cancel(id: number){
    this.api.cancelHouseReservation(id).subscribe((response:any) => {
      this.houseReservations = this.houseReservations.filter((e:any) => e.id != id);
      this._snackBar.open('You have successfully canceled your reservation. ', 'Close', {duration: 3000})

    });
  }

}
