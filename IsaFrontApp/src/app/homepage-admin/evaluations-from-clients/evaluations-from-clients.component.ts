import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-evaluations-from-clients',
  templateUrl: './evaluations-from-clients.component.html',
  styleUrls: ['./evaluations-from-clients.component.css']
})
export class EvaluationsFromClientsComponent implements OnInit {

  id: any;
  boatId: any;
  homeId: any;
  user: any = {} as any;
  clients: any = {} as any;
  instructors: any = {} as any;
  homeOwners: any = {} as any;
  boatOwners: any = {} as any;
  adventureEvaluations = [] as any;
  boatEvaluations = [] as any;
  homeEvaluations = [] as any;
  adventureBox: boolean = false;
  boatBox: boolean = false;
  homeBox: boolean = true;
  adventureReservations = [] as any;
  homeReservations = [] as any;
  boatReservations = [] as any;


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
  for(var evaluation of this.adventureEvaluations){
    for(var client of this.clients){
      if(client.id == evaluation.clientId)
        this.adventureEvaluations.push(client);
    }
  }
  for(var evaluation of this.boatEvaluations){
    for(var client of this.clients){
      if(client.id == evaluation.clientId)
        this.boatEvaluations.push(client);
    }
  }
  for(var evaluation of this.homeEvaluations){
    for(var client of this.clients){
      if(client.id == evaluation.clientId)
        this.homeEvaluations.push(client);
    }
  }
}

getFullName1(): void{
  for(var evaluation of this.adventureEvaluations){
    for(var reservation of this.adventureReservations){
      if(reservation.id == evaluation.adventureReservationId)
        for(var instructor of this.instructors){
          if(instructor.id == reservation.instructorId)
          this.adventureEvaluations.push(instructor);
        }
    }
  }
  for(var evaluation of this.boatEvaluations){
    for(var reservation of this.boatReservations){
      if(reservation.id == evaluation.boatReservationId)
        for(var owner of this.boatOwners){
          if(owner.id == reservation.ownerId)
          this.boatEvaluations.push(owner);
        }
    }
  }
  for(var evaluation of this.homeEvaluations){
    for(var reservation of this.homeReservations){
      if(reservation.id == evaluation.homeReservationId)
        for(var owner of this.homeOwners){
          if(owner.id == reservation.ownerId)
          this.homeEvaluations.push(owner);
        }
    }
  }
}

  adventureEvaluation(): void{

    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
      console.log(response);
    }, () => this.getFullName());
  
    this.api.getInstructors().subscribe((response:any) => {
      this.instructors = response;      
      console.log(response);
    }, () => this.getFullName1());
   
    this.api.getAllAdventureEvaluationsWithoutApprovedAndDeclined().subscribe((response:any) => {
      this.adventureEvaluations = response;      
    });
  }

  boatEvaluation(): void{

    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
      console.log(response);
    }, () => this.getFullName());
  
    this.api.getBoatOwners().subscribe((response:any) => {
      this.boatOwners = response;      
      console.log(response);
    }, () => this.getFullName1());

    this.api.getAllBoatEvaluationsWithoutApprovedAndDeclined().subscribe((response:any) => {
      this.boatEvaluations = response;      
    });
   
  }

  homeEvaluation(): void{

    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
      console.log(response);
    }, () => this.getFullName());
  
    this.api.getHomeOwners().subscribe((response:any) => {
      this.homeOwners = response;      
      console.log(response);
    }, () => this.getFullName1());

    this.api.getAllHomeEvaluationsWithoutApprovedAndDeclined().subscribe((response:any) => {
      this.homeEvaluations = response;      
    }); 
   
  }
  
  setApprovedAdventure(id: any) {
    this.api.approveAdventureEvaluation(id).subscribe((response: any) => {

    });
  }  

  setDeclinedAdventure(id: any)
  {
    this.api.declineAdventureEvaluation(id).subscribe((response: any) => {

    });
  }

  setApprovedBoat(id: any) {
    this.api.approveBoatEvaluation(id).subscribe((response: any) => {

    });
  }  

  setDeclinedBaot(id: any)
  {
    this.api.declineBoatEvaluation(id).subscribe((response: any) => {

    });
  }

  setApprovedHome(id: any) {
    this.api.approveHomeEvaluation(id).subscribe((response: any) => {

    });
  }  

  setDeclinedHome(id: any)
  {
    this.api.declineHomeEvaluation(id).subscribe((response: any) => {

    });
  }


}
