import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';


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
  result: any;
  house: any;
 
  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder : FormBuilder, 
    private _snackBar: MatSnackBar
  ) { 
    this.form = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      address: ['', Validators.required]
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
      this.result = this.houses.length;
      if(response.length == 0){
        this._snackBar.open('There are no available places to stay for your dates on our site. If you are flexible, check out some alternative dates.', 'Close', {duration: 5000})
      }    
    });
   
  }

  sortCottages(): any[] {
    return this.houses.sort((a: any, b: any) => (a.pricelist) - (b.pricelist));
  }

  logout() {
    this.user = localStorage.clear();
    this.router.navigate(['/']);
  }

}
