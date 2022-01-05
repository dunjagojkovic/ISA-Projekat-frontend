import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-reserve-cottages-standard',
  templateUrl: './reserve-cottages-standard.component.html',
  styleUrls: ['./reserve-cottages-standard.component.css']
})
export class ReserveCottagesStandardComponent implements OnInit {

  user: any = {} as any;
  todayDate:Date = new Date();
  id: any;
  house:any = {} as any;
  form: FormGroup;
  startDate:any;
  endDate:any;
  pricelist: any;
  name:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private formBuilder : FormBuilder
  ) { 

    this.route.queryParams
    .subscribe(params => {
      this.id = params.id;
      this.startDate = new Date(params.startDate);
      this.endDate = new Date(params.endDate);
    });
    
    this.form = this.formBuilder.group({
        extraServices: ['']
    })
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;     
  });
  
  this.api.loadOneHouse(this.id).subscribe((response:any) => {
    this.house = response;
  });
  }

  onSubmit() {
   
    const extraServices = this.form.get('extraService')?.value;

    let data = {
      name: this.name,
      extraServices: extraServices,
      startDate: this.startDate,
      endDate: this.endDate,
      houseId: this.id,
      pricelist: this.pricelist
    }

    this.api.bookHouse(data).subscribe((response: any) => {
        console.log(response);
        if(response != null){
          this.house = response;
        }
       
    });
  
}
 

}
