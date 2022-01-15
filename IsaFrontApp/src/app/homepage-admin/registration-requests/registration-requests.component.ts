import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent implements OnInit {

  users: any;
  status: any;
  id: any;

  constructor(private apiService: ApiService) 
  {
    this.users = []
  }

  ngOnInit(): void {
    
    this.apiService.getUsers().subscribe((response : any) => {
  
      this.users = response;
    })
  }

  setActive(id: any) {
    this.apiService.approveUser(id).subscribe((response: any) => {

    });
  }  

  setDeclined(id: any)
  {
    this.apiService.declineUser(id).subscribe((response: any) => {

    });
  }

 

}
