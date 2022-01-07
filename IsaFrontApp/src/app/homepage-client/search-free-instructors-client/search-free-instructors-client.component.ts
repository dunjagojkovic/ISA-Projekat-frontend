import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-free-instructors-client',
  templateUrl: './search-free-instructors-client.component.html',
  styleUrls: ['./search-free-instructors-client.component.css']
})
export class SearchFreeInstructorsClientComponent implements OnInit {

  form: FormGroup;
  instructors = [] as any;
  user: any = {} as any;
  todayDate:Date = new Date();
  startDate: any;
  endDate: any;
  address: any;
  result: any;
  instructor: any;
 
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

    this.api.searchFreeInstructors(data).subscribe((response: any) => {
      console.log(response);
      this.instructors = response;  
      this.result = this.instructors.length;
      if(response.length == 0){
        this._snackBar.open('There are no available places to stay for your dates on our site. If you are flexible, check out some alternative dates.', 'Close', {duration: 5000})
      }    
    });
  }

  sortInstructors(): any[] {
    return this.instructors.sort((a: any, b: any) => (a.pricelist) - (b.pricelist));
  }

}
