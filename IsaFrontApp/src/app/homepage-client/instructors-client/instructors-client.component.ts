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
  instructors = [] as any


  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
  });
  this.api.loadIstructorsForClients().subscribe((response:any) => {
    this.instructors = response;
  });
  }

  sortInstructorsByLocation(): any[] {
    return this.instructors.sort((a: any, b: any) => a.address.localeCompare(b.address));    
  }

  sortInstructorsByName(): any[] {
    return this.instructors.sort((a: any, b: any) => a.name.localeCompare(b.name));    
  }

  sortInstructorsByPrice(): any[] {
    return this.instructors.sort((a: any, b: any) => (a.priceList) - (b.priceList));
  }

}
