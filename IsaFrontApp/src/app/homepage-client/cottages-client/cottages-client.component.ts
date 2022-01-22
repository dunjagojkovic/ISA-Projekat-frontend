import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-cottages-client',
  templateUrl: './cottages-client.component.html',
  styleUrls: ['./cottages-client.component.css']
})
export class CottagesClientComponent implements OnInit {

  houses = [] as any;
  user: any = {} as any;
  subscriptions = [] as any;

 
  constructor(
    private router: Router,
    private api: ApiService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.api.loadHousesForClients().subscribe((response:any) => {
      this.houses = response;
    });
    this.api.current().subscribe((response:any) => {
      this.user = response;     
      console.log(response); 
  });
  }

  sortCottagesByLocation(): any[] {
    return this.houses.sort((a: any, b: any) => a.address.localeCompare(b.address));    
  }

  sortCottagesByName(): any[] {
    return this.houses.sort((a: any, b: any) => a.name.localeCompare(b.name));    
  }

  sortCottagesByPrice(): any[] {
    return this.houses.sort((a: any, b: any) => (a.pricelist) - (b.pricelist));
  }

  sortCottagesByRate(): any[] {
    return this.houses.sort((a: any, b: any) => (b.avgRate) - (a.avgRate));
  }

  
SubscribeMe(id:any){
  let house: any;

  for(let h of this.houses) {
      if(h.id === id) {
        house = h;
      }
  }

  let data = {
    name:  house.name,
    extraServices: house.extraServices,
    houseId:  house.id,
    pricelist: house.pricellist,
    clientId: this.user.id
  }
  
  this.api.subscribeUserOnAction(id, data).subscribe((response: any) => {
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


logout() {
  this.user = localStorage.clear();
  this.router.navigate(['/']);
}

}
