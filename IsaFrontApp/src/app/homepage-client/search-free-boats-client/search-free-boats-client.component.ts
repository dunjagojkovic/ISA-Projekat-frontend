import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-free-boats-client',
  templateUrl: './search-free-boats-client.component.html',
  styleUrls: ['./search-free-boats-client.component.css']
})
export class SearchFreeBoatsClientComponent implements OnInit {

  form: FormGroup;
  boats = [] as any;
  user: any = {} as any;
  todayDate:Date = new Date();
  startDate: any;
  endDate: any;
  address: any;

  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder : FormBuilder, 
    private _snackBar: MatSnackBar
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

    this.api.searchFreeBoats(data).subscribe((response: any) => {
      console.log(response);
      this.boats = response;  
      if(response.length == 0){
        this._snackBar.open('There are no available boats for your dates on our site. If you are flexible, check out some alternative dates.', 'Close', {duration: 5000})
      }    
    });
  
  }

  sortBoats(): any[] {
    return this.boats.sort((a: any, b: any) => (a.pricelist) - (b.pricelist));
  }

  logout() {
    this.user = localStorage.clear();
    this.router.navigate(['/']);
  }

}
