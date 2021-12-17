import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructors-client',
  templateUrl: './instructors-client.component.html',
  styleUrls: ['./instructors-client.component.css']
})
export class InstructorsClientComponent implements OnInit {

 
  constructor(
    private router: Router,
    private api: ApiService   
  ) { }

  sortingValue = new FormControl();
  sortingList: string[] = ['Name', 'Location', 'Rate'];
  user: any = {} as any;


  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
  });
  }

}
