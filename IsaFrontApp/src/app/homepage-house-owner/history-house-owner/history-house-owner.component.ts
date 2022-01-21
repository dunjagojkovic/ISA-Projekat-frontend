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
  clients = [] as any;
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
  todayRes: any;


constructor(
  private router: Router,
  private api: ApiService   
) { }


  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
      console.log(response);
  });

  this.api.getClients().subscribe((response:any) => {
    this.clients = response;      
    //console.log(response);
  }, () => this.getFullName());

    let data = {
      startDate: this.startDate,
      endDate: this.endDate,
      address: this.address,
      ownerId: this.user.id
    }
  
  this.api.getReservationsForMyHouses(data).subscribe((response:any) => {
    this.reservations = response;      
    //console.log(response);
  });
}

  todayReservation(): void{
    let data = {
      startDate: this.startDate,
      endDate: this.endDate,
      address: this.address,
      ownerId: this.user.id
    }

    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
      //console.log(response);
    }, () => this.getFullName());

    this.api.getTodayReservationsForMyHouses(data).subscribe((response:any) => {
      this.todayReservations = response; 
      console.log(this.todayReservations);     
    });

  }

  historyReservation(): void{
    let data = {
      startDate: this.startDate,
      endDate: this.endDate,
      address: this.address,
      ownerId: this.user.id
    }

    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
    }, () => this.getFullName());

    this.api.getHistoryReservationsForMyHouses(data).subscribe((response:any) => {
      this.historyReservations = response;      
    },() => this.getFullName());
  }

  logout(): void{
    localStorage.clear();
  }

  getFullName(): void{
    for(var reservation of this.reservations){
      for(var client of this.clients){
        if(client.id == reservation.clientId)
          this.reservations.push(client);
     }
    }
    for(var reservation of this.todayReservations){
      for(var client of this.clients){
        if(client.id == reservation.clientId)
          this.todayReservations.push(client);
      }
    }
    for(var reservation of this.historyReservations){
      for(var client of this.clients){
        if(client.id == reservation.clientId)
          this.historyReservations.push(client);
      }
    }
  }

  

}