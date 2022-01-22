import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-complaints-from-clients',
  templateUrl: './complaints-from-clients.component.html',
  styleUrls: ['./complaints-from-clients.component.css']
})
export class ComplaintsFromClientsComponent implements OnInit {

  user: any = {} as any;
  adventureComplaints = [] as any;
  boatComplaints = [] as any;
  homeComplaints = [] as any;
  adventureBox: boolean = false;
  boatBox: boolean = false;
  homeBox: boolean = true;

constructor(
  private router: Router,
  private api: ApiService   
) { }


  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
      console.log(response);
  });

}

  adventureComplaint(): void{
   
    this.api.getAllAdventureComplaintsWithoutResponse().subscribe((response:any) => {
      this.adventureComplaints = response;      
    });
  }

  boatComplaint(): void{
    this.api.getAllBoatComplaintsWithoutResponse().subscribe((response:any) => {
      this.boatComplaints = response;      
    });
   
  }

  homeComplaint(): void{
    this.api.getAllHomeComplaintsWithoutResponse().subscribe((response:any) => {
      this.homeComplaints = response;      
    }); 
   
  }

}
