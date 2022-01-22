import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  user: any = {} as any;
  adventureReviews = [] as any;
  boatReviews = [] as any;
  homeReviews = [] as any;
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

  adventureReview(): void{
   
    this.api.getAllAdventureReviewsWithoutOnePenalty().subscribe((response:any) => {
      this.adventureReviews = response;      
    });
  }

  boatReview(): void{
    this.api.getAllBoatReviewsWithoutOnePenalty().subscribe((response:any) => {
      this.boatReviews = response;      
    });
   
  }

  homeReview(): void{
    this.api.getAllHomeReviewsWithoutOnePenalty().subscribe((response:any) => {
      this.homeReviews = response;      
    }); 
   
  }

}
