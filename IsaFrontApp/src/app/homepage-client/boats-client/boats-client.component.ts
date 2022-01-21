import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-boats-client',
  templateUrl: './boats-client.component.html',
  styleUrls: ['./boats-client.component.css']
})
export class BoatsClientComponent implements OnInit {

  boats = [] as any;
  subscriptions = [] as any;
  user: any = {} as any;
  latitude: any;
  longitude: any;
  lat = 44.62049751048226;
  lon = 20.50303520932738;
 
  constructor(
    private router: Router,
    private api: ApiService,
        private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.api.loadBoatsForClients().subscribe((response:any) => {
      this.boats = response;
    });
    this.api.current().subscribe((response:any) => {
      this.user = response;   
      console.log(response);   
  });
  }

  sortBoatsByLocation(): any[] {
    return this.boats.sort((a: any, b: any) => a.address.localeCompare(b.address));    
  }

  sortBoatsByName(): any[] {
    return this.boats.sort((a: any, b: any) => a.name.localeCompare(b.name));    
  }

  sortBoatsByPrice(): any[] {
    return this.boats.sort((a: any, b: any) => (a.pricelist) - (b.pricelist));
  }

  sortBoatsByRate(): any[] {
    return this.boats.sort((a: any, b: any) => (b.avgRate) - (a.avgRate));
  }

  logout() {
    this.user = localStorage.clear();
    this.router.navigate(['/']);
  }

   
SubscribeMe(id:any){
  let boat: any;

  for(let b of this.boats) {
      if(b.id === id) {
        boat = b;
      }
  }

  let data = {
    name:  boat.name,
    extraServices: boat.extraServices,
    boatId:  boat.id,
    pricelist: boat.pricellist,
    clientId: this.user.id
  }
  
  this.api.subscribeUserOnBoatAction(id, data).subscribe((response: any) => {
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
