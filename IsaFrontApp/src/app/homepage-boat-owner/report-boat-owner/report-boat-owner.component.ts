import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-report-boat-owner',
  templateUrl: './report-boat-owner.component.html',
  styleUrls: ['./report-boat-owner.component.css']
})
export class ReportBoatOwnerComponent implements OnInit {

  user: any = {} as any;

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
