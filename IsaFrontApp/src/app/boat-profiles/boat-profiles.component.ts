import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-boat-profiles-client', 
  templateUrl: './boat-profiles-client.component.html',
  styleUrls: ['./boat-profiles-client.component.css'], 
})
export class BoatProfilesComponent implements OnInit {

  boats = [] as any;
  form: FormGroup;

  constructor(
    private router: Router,
    private api: ApiService ,
    private formBuilder : FormBuilder  
  ) {
    this.form = this.formBuilder.group({
      searchTerm: ['']     
    })
  }

  ngOnInit(): void {
    this.api.loadBoatsForAllUsers().subscribe((response:any) => {
      this.boats = response;
    });
  }
 
  onSearch(){
    const searchTerm = this.form.get('searchTerm')?.value;

   
    let data = {
      searchTerm: searchTerm   
    }

    this.api.filterBoats(data).subscribe((response: any) => {
      console.log(response);
      this.boats = response;
    });
  }

}
  

