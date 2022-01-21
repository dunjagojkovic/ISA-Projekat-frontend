import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat = 44.62049751048226;
  lon = 20.50303520932738;
  latitude: any;
  longitude: any;
  user: any = {} as any;
  id: any;

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
