import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserve-house-owner',
  templateUrl: './reserve-house-owner.component.html',
  styleUrls: ['./reserve-house-owner.component.css']
})
export class ReserveHouseOwnerComponent implements OnInit {

  user: any = {} as any;
  todayDate:Date = new Date();
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;     
  });
  }

  logout(): void{
    localStorage.clear();
  }

}
