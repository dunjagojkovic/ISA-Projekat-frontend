import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-profiles-client',
  templateUrl: './instructor-profiles-client.component.html',
  styleUrls: ['./instructor-profiles-client.component.css']
})
export class InstructorProfilesClientComponent implements OnInit {
  
  constructor(
    private router: Router,
    private api: ApiService   
  ) { }

  instructors = [] as any


  ngOnInit(): void {
  this.api.loadInstructorsForAllUsers().subscribe((response:any) => {
    this.instructors = response;
  });
  }

}
