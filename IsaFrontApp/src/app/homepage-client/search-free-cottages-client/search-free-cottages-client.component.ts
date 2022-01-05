import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-search-free-cottages-client',
  templateUrl: './search-free-cottages-client.component.html',
  styleUrls: ['./search-free-cottages-client.component.css']
})
export class SearchFreeCottagesClientComponent implements OnInit {

  form: FormGroup;
  houses = [] as any;
  user: any = {} as any;
  todayDate:Date = new Date();
  startDate: any;
  endDate: any;
  address: any;
 
  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder : FormBuilder, 
  ) { 
    this.form = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      address: ['']
    })
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;     
  });
  }

  onSearch(){
    this.startDate = this.form.get('startDate')?.value;
    this.endDate = this.form.get('endDate')?.value;
    this.address = this.form.get('address')?.value;

    let data = {
      startDate: this.startDate,
      endDate: this.endDate,
      address: this.address
    }

    this.api.searchFreeHouses(data).subscribe((response: any) => {
      console.log(response);
      this.houses = response;
    });
  }

  sortCottages(): any[] {
    return this.houses.sort((a: any, b: any) => (a.pricelist) - (b.pricelist));
  }

}
