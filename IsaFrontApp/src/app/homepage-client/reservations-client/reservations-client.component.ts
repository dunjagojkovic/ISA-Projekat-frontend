import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


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
    private api: ApiService
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
  

}
