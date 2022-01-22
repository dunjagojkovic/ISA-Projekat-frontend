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
  adventureEvaluations = [] as any;
  boatEvaluations = [] as any;
  homeEvaluations = [] as any;
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

  adventureEvaluation(): void{
   
    this.api.getAllAdventureEvaluationsWithoutApprovedAndDeclined().subscribe((response:any) => {
      this.adventureEvaluations = response;      
    });
  }

  boatEvaluation(): void{
    this.api.getAllBoatEvaluationsWithoutApprovedAndDeclined().subscribe((response:any) => {
      this.boatEvaluations = response;      
    });
   
  }

  homeEvaluation(): void{
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
