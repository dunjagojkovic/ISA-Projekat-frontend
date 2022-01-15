import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maps-house-owner',
  templateUrl: './maps-house-owner.component.html',
  styleUrls: ['./maps-house-owner.component.css']
})
export class MapsHouseOwnerComponent implements OnInit {

  user: any = {} as any;
  latitude: any;
  longitude: any;
  id: any;
  lat = 44.62049751048226;
  lon = 20.50303520932738;

  constructor(
    private router: Router,
    private api: ApiService,
    private route: ActivatedRoute
  ) { 
    this.route.queryParams
    .subscribe(params => {
      this.id = params.id;
      this.latitude = params.latitude;
      this.longitude = params.longitude;
    }
  );

  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;
  });
  }

  logout(): void{
    localStorage.clear();
  }
}
