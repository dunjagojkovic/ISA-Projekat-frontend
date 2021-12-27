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
  startDate:Date = new Date();
  endDate:Date = new Date();
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
  ) { 

    this.route.queryParams
    .subscribe(params => {
      this.id = params.id;
    }
  );  
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;     
  });
  
  this.api.loadOneHouse(this.id).subscribe((response:any) => {
    this.house = response;
  });
  }

 

}
