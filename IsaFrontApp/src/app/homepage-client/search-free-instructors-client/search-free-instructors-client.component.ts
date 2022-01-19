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
  boxVisible: boolean = false;
  maxNumberOfPeople: any;

 
  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder : FormBuilder, 
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      address: [''],
      maxNumberOfPeople: ['']
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
    this.maxNumberOfPeople = this.form.get('maxNumberOfPeople')?.value;

  if(this.isDateValid()){
    let data = {    
      startDate: this.startDate,
      endDate: this.endDate,
      address: this.address,
      maxNumberOfPeople: this.maxNumberOfPeople
      }

    this.api.searchFreeInstructors(data).subscribe((response: any) => {
      console.log(response);
      this.instructors = response;  
      this.result = this.instructors.length;
      if(response.length != 0){
        this.boxVisible = true;
      }
      if(response.length == 0){
        this._snackBar.open('There are no available instructors for your dates on our site. If you are flexible, check out some alternative dates.', 'Close', {duration: 5000})
        this.boxVisible = false;
      }    
    });
    }

    
  }

  sortInstructors(): any[] {
    return this.instructors.sort((a: any, b: any) => (a.pricelist) - (b.pricelist));
  }

  sortInstructorsByRate(): any[] {
    return this.instructors.sort((a: any, b: any) => (b.avgRate) - (a.avgRate));
  }

  logout() {
    this.user = localStorage.clear();
    this.router.navigate(['/']);
  }


  isDateValid(){
    if((this.startDate == null || this.startDate == "") && (this.endDate == null || this.endDate == ""))
      return this._snackBar.open('Please enter dates and destination to start searching!', 'Close', {duration: 5000});
    return true;
  }

 

}
