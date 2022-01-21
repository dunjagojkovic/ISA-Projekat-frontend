import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-instructors-client',
  templateUrl: './instructors-client.component.html',
  styleUrls: ['./instructors-client.component.css']
})
export class InstructorsClientComponent implements OnInit {
 
  latitude: any;
  longitude: any;
  lat = 44.62049751048226;
  lon = 20.50303520932738;

  constructor(
    private router: Router,
    private api: ApiService,
    private _snackBar: MatSnackBar
 
  ) { }

  sortingValue = new FormControl();
  sortingList: string[] = ['Name', 'Location', 'Rate'];
  user: any = {} as any;
  instructors = [] as any;
  subscriptions = [] as any;



  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
  });
  this.api.loadIstructorsForClients().subscribe((response:any) => {
    this.instructors = response;
    console.log(response);
  });
  }

  sortInstructorsByLocation(): any[] {
    return this.instructors.sort((a: any, b: any) => a.address.localeCompare(b.address));    
  }

  sortInstructorsByName(): any[] {
    return this.instructors.sort((a: any, b: any) => a.name.localeCompare(b.name));    
  }

  sortInstructorsByPrice(): any[] {
    return this.instructors.sort((a: any, b: any) => (a.pricelist) - (b.pricelist));
  }

  sortInstructorsByRate(): any[] {
    return this.instructors.sort((a: any, b: any) => (b.avgRate) - (a.avgRate));
  }

  logout() {
    this.user = localStorage.clear();
    this.router.navigate(['/']);
  }

    
SubscribeMe(id:any){
  let instructor: any;

  for(let i of this.instructors) {
      if(i.id === id) {
        instructor = i;
      }
  }

  let data = {
    name:  instructor.name,
    extraServices: instructor.extraServices,
    adventureId:  instructor.id,
    pricelist: instructor.pricellist,
    clientId: this.user.id
  }
  
  this.api.subscribeUserOnInstructorAction(id, data).subscribe((response: any) => {
    this.subscriptions = response;
    console.log(response);
    if(response == null){
      this._snackBar.open('You are alredy subscribed. ', 'Close', {duration: 5000});   
    }
    else{
      this._snackBar.open('Thank you for your subscription. You are going to recieve notifications about this property. ', 'Close', {duration: 5000});   
    }
});
}


}
