import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-boats-client',
  templateUrl: './boats-client.component.html',
  styleUrls: ['./boats-client.component.css']
})
export class BoatsClientComponent implements OnInit {

  boats = [] as any;
  user: any = {} as any;
 
  constructor(
    private router: Router,
    private api: ApiService   
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

}
