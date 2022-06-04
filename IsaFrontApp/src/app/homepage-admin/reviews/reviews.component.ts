import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  id: any;
  user: any = {} as any;
  adventureReviews = [] as any;
  boatReviews = [] as any;
  homeReviews = [] as any;
  adventureBox: boolean = false;
  boatBox: boolean = false;
  homeBox: boolean = true;
  clients: any = {} as any;
  instructors: any = {} as any;
  homeOwners: any = {} as any;
  boatOwners: any = {} as any;
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
  }, () => this.getFullName1());

  this.api.getInstructors().subscribe((response:any) => {
    this.instructors = response;      
    console.log(response);
  }, () => this.getFullName());

  this.api.getHomeOwners().subscribe((response:any) => {
    this.homeOwners = response;      
    console.log(response);
  }, () => this.getFullName());

  this.api.getBoatOwners().subscribe((response:any) => {
    this.boatOwners = response;      
    console.log(response);
  }, () => this.getFullName());

}

getFullName(): void{
  for(var review of this.adventureReviews){
    for(var instructor of this.instructors){
      if(instructor.id == review.instructorId)
        this.adventureReviews.push(instructor);
    }
  }
  for(var review of this.boatReviews){
    for(var owner of this.boatOwners){
      if(owner.id == review.ownerId)
        this.boatReviews.push(owner);
    }
  }
  for(var review of this.homeReviews){
    for(var owner of this.homeOwners){
      if(owner.id == review.ownerId)
        this.homeReviews.push(owner);
    }
  }
}

getFullName1(): void{
  for(var review of this.adventureReviews){
    for(var reservation of this.adventureReservations){
      if(reservation.id == review.adventureReservationId)
        for(var client of this.clients){
          if(client.id == reservation.clientId)
          this.adventureReviews.push(client);
        }
    }
  }
  for(var review of this.boatReviews){
    for(var reservation of this.boatReservations){
      if(reservation.id == review.boatReservationId)
        for(var client of this.clients){
          if(client.id == reservation.clientId)
          this.boatReviews.push(client);
        }
    }
  }
  for(var review of this.homeReviews){
    for(var reservation of this.homeReservations){
      if(reservation.id == review.homeReservationId)
        for(var client of this.clients){
          if(client.id == reservation.clientId)
          this.homeReviews.push(client);
        }
    }
  }
}

  adventureReview(): void{
    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
      console.log(response);
    }, () => this.getFullName1());
  
    this.api.getInstructors().subscribe((response:any) => {
      this.instructors = response;      
      console.log(response);
    }, () => this.getFullName());
   
    this.api.getAllAdventureReviewsWithoutOnePenalty().subscribe((response:any) => {
      this.adventureReviews = response;      
    });
  }

  boatReview(): void{

    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
      console.log(response);
    }, () => this.getFullName1());
  
    this.api.getBoatOwners().subscribe((response:any) => {
      this.boatOwners = response;      
      console.log(response);
    }, () => this.getFullName());

    this.api.getAllBoatReviewsWithoutOnePenalty().subscribe((response:any) => {
      this.boatReviews = response;      
    });
   
  }

  homeReview(): void{

    this.api.getClients().subscribe((response:any) => {
      this.clients = response;      
      console.log(response);
    }, () => this.getFullName1());
  
    this.api.getHomeOwners().subscribe((response:any) => {
      this.homeOwners = response;      
      console.log(response);
    }, () => this.getFullName());

    this.api.getAllHomeReviewsWithoutOnePenalty().subscribe((response:any) => {
      this.homeReviews = response;      
    }); 
   
  }

  strikeAdventureClient(id: any) {
    this.api.strikeAdventureClient(id).subscribe((response: any) => {

    });
  }  

  strikeBoatClient(id: any)
  {
    this.api.strikeBoatClient(id).subscribe((response: any) => {

    });
  }

  strikeHomeClient(id: any) {
    this.api.strikeHomeClient(id).subscribe((response: any) => {

    });
  }  

}
