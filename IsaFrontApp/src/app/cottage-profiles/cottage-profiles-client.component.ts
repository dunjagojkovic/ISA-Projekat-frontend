import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cottage-profiles-client',
  templateUrl: './cottage-profiles-client.component.html',
  styleUrls: ['./cottage-profiles-client.component.css']
})
export class CottageProfilesClientComponent implements OnInit {

  houses = [] as any;
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
    this.api.loadHousesForAllUsers().subscribe((response:any) => {
      this.houses = response;
    });
  }

  onSearch(){
    const searchTerm = this.form.get('searchTerm')?.value;

   
    let data = {
      searchTerm: searchTerm   
    }

    this.api.filterHouses(data).subscribe((response: any) => {
      console.log(response);
      this.houses = response;
    });
  }

}
