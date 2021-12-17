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

  boats = [] as any
 
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
