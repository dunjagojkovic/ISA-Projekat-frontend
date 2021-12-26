import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-cottage-profiles-client',
  templateUrl: './cottage-profiles-client.component.html',
  styleUrls: ['./cottage-profiles-client.component.css']
})
export class CottageProfilesClientComponent implements OnInit {

  houses = [] as any
 
  constructor(
    private router: Router,
    private api: ApiService   
  ) { }

  ngOnInit(): void {
    this.api.loadHousesForAllUsers().subscribe((response:any) => {
      this.houses = response;
    });
  }


}
