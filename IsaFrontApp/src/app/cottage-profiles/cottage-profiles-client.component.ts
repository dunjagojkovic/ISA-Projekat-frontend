import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

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
    private formBuilder : FormBuilder,  
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      address:[''],
      extraService:[''],
      numberOfBeds:[''],
     
    })
   }

  ngOnInit(): void {
    this.api.loadHousesForAllUsers().subscribe((response:any) => {
      this.houses = response;
    });
  }

  onSearch(){
    const name = this.form.get('name')?.value;
    const address = this.form.get('address')?.value;
    const extraService = this.form.get('extraService')?.value;
    const numberOfBeds = this.form.get('numberOfBeds')?.value;

   
    let data = {
      name: name,
      address: address,
      extraService: extraService,
      numberOfBeds: numberOfBeds     
    }

    this.api.filterHouses(data).subscribe((response: any) => {
      console.log(response);
      this.houses = response;
    });
  }

}
