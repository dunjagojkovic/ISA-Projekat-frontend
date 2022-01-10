import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-instructor-profiles-client',
  templateUrl: './instructor-profiles-client.component.html',
  styleUrls: ['./instructor-profiles-client.component.css']
})
export class InstructorProfilesClientComponent implements OnInit {
  
  instructors = [] as any;
  form: FormGroup;

  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder : FormBuilder  
  ) {
    this.form = this.formBuilder.group({
      searchTerm: ['']     
    })
   }


  ngOnInit(): void {
  this.api.loadInstructorsForAllUsers().subscribe((response:any) => {
    this.instructors = response;
  });
  }

  onSearch(){
    const searchTerm = this.form.get('searchTerm')?.value;
   
    let data = {
      searchTerm: searchTerm   
    }

    this.api.filterInstructors(data).subscribe((response: any) => {
      console.log(response);
      this.instructors = response;
    });
  }

}
