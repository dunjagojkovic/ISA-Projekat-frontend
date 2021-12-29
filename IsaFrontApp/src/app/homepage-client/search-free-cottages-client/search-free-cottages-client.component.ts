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
  endDate: any
 
  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder : FormBuilder, 
  ) { 
    this.form = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      location: ['',  Validators.required]
    })
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;     
      console.log(response); 
  });
  }

  onSearch(){
    this.startDate = this.form.get('startDate')?.value;
    this.endDate = this.form.get('endDate')?.value;
    const location = this.form.get('location')?.value;

    let data = {
      startDate: this.startDate,
      endDate: this.endDate,
      location: location
    }

    this.api.searchFreeHouses(data).subscribe((response: any) => {
      console.log(response);
      this.houses = response;
    });
  }

}
