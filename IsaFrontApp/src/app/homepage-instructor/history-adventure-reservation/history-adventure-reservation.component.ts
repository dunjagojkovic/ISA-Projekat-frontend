import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
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
  clients = [] as any;
  startDate: any;
  endDate: any;
  address: any;
  historyBox: boolean = false;
  todayBox: boolean = false;
  upcommingBox: boolean = true;
  client: any;
  clientId: any;
  dataSource = new MatTableDataSource(this.reservations);
  form: FormGroup;
  userBox: boolean = true;

  constructor(
    private api: ApiService, 
    private formBuilder : FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      searchTerm: ['']
     
    })
  }


  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
      console.log(response);
  });

  this.api.getClients().subscribe((response:any) => {
    this.clients = response;      
    console.log(response);
  }, () => this.getFullName());

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
    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
      console.log(response);
    }, () => this.getFullName());

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
    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
      console.log(response);
    }, () => this.getFullName());

    this.api.getHistoryReservationsForMyAdventures(data).subscribe((response:any) => {
      this.historyReservations = response;      
    });
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
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  onSearch(){
    const searchTerm = this.form.get('searchTerm')?.value;
   
    let data = {
      searchTerm: searchTerm   
    }
  
    this.api.filterClients(data).subscribe((response: any) => {
      console.log(response);
      this.clients = response;
      for(var client of this.clients){
        if(client.id != this.reservations.clientId){
            this.userBox = false;
        }
      }
    });
  }  

}


