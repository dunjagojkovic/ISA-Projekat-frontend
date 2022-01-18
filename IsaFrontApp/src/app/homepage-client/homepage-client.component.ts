import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HomepageHouseOwnerComponent } from '../homepage-house-owner/homepage-house-owner.component';

@Component({
  selector: 'app-homepage-client',
  templateUrl: './homepage-client.component.html',
  styleUrls: ['./homepage-client.component.css']
})
export class HomepageClientComponent implements OnInit {

  user: any = {} as any;
  subscriptions = [] as any;


constructor(
  private router: Router,
  private api: ApiService   
) { }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
  });
  this.api.getMyHouseSubscriptions().subscribe((response:any) => {
    this.subscriptions = response;
    console.log(response);
  });

  }

  UnSubscribeMe(id:any){
    let house: any;
  
    for(let h of this.subscriptions) {
        if(h.id === id) {
          house = h;
        }
    }
  
    let data = {
      houseId:  house.id,
      isSubscribed: house.isSubscribed,      
      clientId: this.user.id
    }
    
    this.api.unSubscribeUserOnAction(id, data).subscribe((response: any) => {
      this.subscriptions = this.subscriptions.filter((e:any) => e.id != id);
  
  });
  }
  
  logout() {
    this.user = localStorage.clear();
    this.router.navigate(['/']);
  }

}
