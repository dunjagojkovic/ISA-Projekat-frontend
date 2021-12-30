import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage-boat-owner',
  templateUrl: './homepage-boat-owner.component.html',
  styleUrls: ['./homepage-boat-owner.component.css']
})
export class HomepageBoatOwnerComponent implements OnInit {
  form: FormGroup;
  homes: any;
  addHouseBox : boolean = false;
  user: any = {} as any;
  images: any;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private api: ApiService   
    ) {
      
      this.homes = [];

      this.form = this.formBuilder.group({
        
      })
     }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;
  });
  }

}
