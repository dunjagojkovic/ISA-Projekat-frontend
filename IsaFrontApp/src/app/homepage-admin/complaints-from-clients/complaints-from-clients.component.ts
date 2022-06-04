import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-complaints-from-clients',
  templateUrl: './complaints-from-clients.component.html',
  styleUrls: ['./complaints-from-clients.component.css']
})
export class ComplaintsFromClientsComponent implements OnInit {

  user: any = {} as any;
  id: any;
  complaintResponse: any;
  complaintResponseBoat: any;
  complaintResponseHome: any;
  adventureComplaints = [] as any;
  boatComplaints = [] as any;
  homeComplaints = [] as any;
  adventureBox: boolean = false;
  boatBox: boolean = false;
  homeBox: boolean = true;
  form: FormGroup;
  clients = [] as any;
  instructors = [] as any;
  homeOwners = [] as any;
  boatOwners = [] as any;
  adventureReservations = [] as any;
  homeReservations = [] as any;
  boatReservations = [] as any;

constructor(
  private router: Router,
  private api: ApiService,
  private _snackBar : MatSnackBar,
  private formBuilder: FormBuilder   
) { 
  this.form = this.formBuilder.group({
    complaintResponse: ['', Validators.pattern('[a-zA-Z]*')]
   


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

  this.api.getInstructors().subscribe((response:any) => {
    this.instructors = response;      
    console.log(response);
  }, () => this.getFullName1());

  this.api.getHomeOwners().subscribe((response:any) => {
    this.homeOwners = response;      
    console.log(response);
  }, () => this.getFullName1());

  this.api.getBoatOwners().subscribe((response:any) => {
    this.boatOwners = response;      
    console.log(response);
  }, () => this.getFullName1());

}



getFullName(): void{
  for(var complaint of this.adventureComplaints){
    for(var client of this.clients){
      if(client.id == complaint.clientId)
        this.adventureComplaints.push(client);
    }
  }
  for(var complaint of this.boatComplaints){
    for(var client of this.clients){
      if(client.id == complaint.clientId)
        this.boatComplaints.push(client);
    }
  }
  for(var complaint of this.homeComplaints){
    for(var client of this.clients){
      if(client.id == complaint.clientId)
        this.homeComplaints.push(client);
    }
  }
}

getFullName1(): void{
  for(var complaint of this.adventureComplaints){
    for(var reservation of this.adventureReservations){
      if(reservation.id == complaint.adventureReservationId)
        for(var instructor of this.instructors){
          if(instructor.id == reservation.instructorId)
          this.adventureComplaints.push(instructor);
        }
    }
  }
  for(var complaint of this.boatComplaints){
    for(var reservation of this.boatReservations){
      if(reservation.id == complaint.boatReservationId)
        for(var owner of this.boatOwners){
          if(owner.id == reservation.ownerId)
          this.boatComplaints.push(owner);
        }
    }
  }
  for(var complaint of this.homeComplaints){
    for(var reservation of this.homeReservations){
      if(reservation.id == complaint.homeReservationId)
        for(var owner of this.homeOwners){
          if(owner.id == reservation.ownerId)
          this.homeComplaints.push(owner);
        }
    }
  }
}

  adventureComplaint(): void{
    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
      console.log(response);
    }, () => this.getFullName());

    this.api.getInstructors().subscribe((response:any) => {
      this.instructors = response;      
      console.log(response);
    }, () => this.getFullName1());
   
    this.api.getAllAdventureComplaintsWithoutResponse().subscribe((response:any) => {
      this.adventureComplaints = response;      
    });
  }

  boatComplaint(): void{
    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
      console.log(response);
    }, () => this.getFullName());

    this.api.getBoatOwners().subscribe((response:any) => {
      this.boatOwners = response;      
      console.log(response);
    }, () => this.getFullName1());

    this.api.getAllBoatComplaintsWithoutResponse().subscribe((response:any) => {
      this.boatComplaints = response;      
    });
   
  }

  homeComplaint(): void{

    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
      console.log(response);
    }, () => this.getFullName());

    this.api.getHomeOwners().subscribe((response:any) => {
      this.homeOwners = response;      
      console.log(response);
    }, () => this.getFullName1());

    this.api.getAllHomeComplaintsWithoutResponse().subscribe((response:any) => {
      this.homeComplaints = response;      
    }); 
   
  }

  onSendResponse(id: number){
    const complaintResponse = this.form.get('complaintResponse')?.value;
    

    let data = {
      complaintResponse: complaintResponse,
      id: id
    }
    console.log(data);

  this.api.responseToAdventureComplaint(data).subscribe((response:any) => {
    this.adventureComplaint = response;
    this._snackBar.open('User has been notified by email.', 'Close', {duration: 5000});
    location.reload();
  
  });
  }


  onSendBoatResponse(id: number){
    const complaintResponse = this.form.get('complaintResponse')?.value;
    

    let data = {
      complaintResponse: complaintResponse,
      id: id
    }
    console.log(data);

  this.api.responseToBoatComplaint(data).subscribe((response:any) => {
    this.boatComplaint = response;
    this._snackBar.open('User has been notified by email.', 'Close', {duration: 5000});
    location.reload();
  
  });
  }

  onSendHomeResponse(id: number){
    const complaintResponse = this.form.get('complaintResponse')?.value;
    

    let data = {
      complaintResponse: complaintResponse,
      id: id
    }
    console.log(data);

  this.api.responseToHomeComplaint(data).subscribe((response:any) => {
    this.homeComplaint = response;
    this._snackBar.open('User has been notified by email.', 'Close', {duration: 5000});
    location.reload();
  
  });
  }

  

}
