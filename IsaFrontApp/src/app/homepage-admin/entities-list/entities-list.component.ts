import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-entities-list',
  templateUrl: './entities-list.component.html',
  styleUrls: ['./entities-list.component.css']
})
export class EntitiesListComponent implements OnInit {
  
  id: any;
  boatId: any;
  homeId: any;
  user: any = {} as any;
  userProfiles = [] as any;
  boatProfiles = [] as any;
  homeProfiles = [] as any;
  userBox: boolean = false;
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

  userProfile(): void{
   
    this.api.getAllUsers().subscribe((response:any) => {
      this.userProfiles = response;      
    });
  }

  boatProfile(): void{
    this.api.getAllBoats().subscribe((response:any) => {
      this.boatProfiles = response;      
    });
   
  }

  homeProfile(): void{
    this.api.getAllCottages().subscribe((response:any) => {
      this.homeProfiles = response;      
    }); 
   
  }

  setDeleted(id: any)
  {
    
    this.api.deleteUser(id).subscribe((response: any) => {
      console.log(response)
    });
  }

}