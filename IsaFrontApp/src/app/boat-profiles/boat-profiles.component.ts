import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-boat-profiles-client', 
  templateUrl: './boat-profiles-client.component.html',
  styleUrls: ['./boat-profiles-client.component.css'], 
})
export class BoatProfilesComponent implements OnInit {

  boats = [] as any;
 
  constructor(
    private router: Router,
    private api: ApiService   
  ) { }

  ngOnInit(): void {
    this.api.loadBoatsForClients().subscribe((response:any) => {
      this.boats = response;
    });
  }

  

}
