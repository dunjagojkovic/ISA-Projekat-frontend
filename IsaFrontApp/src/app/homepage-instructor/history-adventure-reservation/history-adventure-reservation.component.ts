import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-history-adventure-reservation',
  templateUrl: './history-adventure-reservation.component.html',
  styleUrls: ['./history-adventure-reservation.component.css']
})
export class HistoryAdventureReservationComponent implements OnInit {

  user: any = {} as any;
  reservations = [] as any;
  todayReservations = [] as any;
  historyReservations = [] as any;
  startDate: any;
  endDate: any;
  address: any;
  historyBox: boolean = false;
  todayBox: boolean = false;
  upcommingBox: boolean = true;

constructor(
  private router: Router,
  private api: ApiService   
) { }


  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
      console.log(response);
  });

  let data = {
    startDate: this.startDate,
    endDate: this.endDate,
    address: this.address,
    instructorId: this.user.id
  }
  this.api.getReservationsForMyAdventures(data).subscribe((response:any) => {
    this.reservations = response;      
    console.log(response);
  });
}

  todayReservation(): void{
    let data = {
      startDate: this.startDate,
      endDate: this.endDate,
      address: this.address,
      instructorId: this.user.id
    }
    this.api.getTodayReservationsForMyAdventures(data).subscribe((response:any) => {
      this.todayReservations = response;      
    });
  }

  historyReservation(): void{
    let data = {
      startDate: this.startDate,
      endDate: this.endDate,
      address: this.address,
      instructorId: this.user.id
    }
    this.api.getHistoryReservationsForMyAdventures(data).subscribe((response:any) => {
      this.historyReservations = response;      
    });
  }

  logout(): void{
    localStorage.clear();
  }

}


