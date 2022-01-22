import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-history-house-owner',
  templateUrl: './history-house-owner.component.html',
  styleUrls: ['./history-house-owner.component.css']
})
export class HistoryHouseOwnerComponent implements OnInit {

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
  client: any;
  clientId: any;

constructor(
  private router: Router,
  private api: ApiService   
) { }


  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
      console.log(response);
  });
  this.api.loadOneUser(this.clientId).subscribe((response: any) => {
    this.client = response;
    console.log(response);
  });

  let data = {
    startDate: this.startDate,
    endDate: this.endDate,
    address: this.address,
    ownerId: this.user.id
  }
  this.api.getReservationsForMyHouses(data).subscribe((response:any) => {
    this.reservations = response;      
    console.log(response);
  });
}

  todayReservation(): void{
    let data = {
      startDate: this.startDate,
      endDate: this.endDate,
      address: this.address,
      ownerId: this.user.id
    }
    this.api.getTodayReservationsForMyHouses(data).subscribe((response:any) => {
      this.todayReservations = response;      
    });
  }

  historyReservation(): void{
    let data = {
      startDate: this.startDate,
      endDate: this.endDate,
      address: this.address,
      ownerId: this.user.id
    }
    this.api.getHistoryReservationsForMyHouses(data).subscribe((response:any) => {
      this.historyReservations = response;      
    });
  }

  logout(): void{
    localStorage.clear();
  }

}