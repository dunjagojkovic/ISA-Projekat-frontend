import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-cottages-client',
  templateUrl: './cottages-client.component.html',
  styleUrls: ['./cottages-client.component.css']
})
export class CottagesClientComponent implements OnInit {

  houses = [] as any;
  user: any = {} as any;
 
  constructor(
    private router: Router,
    private api: ApiService   
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
}
