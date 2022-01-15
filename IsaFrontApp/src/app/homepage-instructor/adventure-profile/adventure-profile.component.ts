import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-adventure-profile',
  templateUrl: './adventure-profile.component.html',
  styleUrls: ['./adventure-profile.component.css']
})
export class AdventureProfileComponent implements OnInit {

  adventures = [] as any;
  

  constructor( private router: Router,
    private api: ApiService ,
    private formBuilder : FormBuilder  ) { }

  ngOnInit(): void {

    this.api.getAllAdventures().subscribe((response:any) => {
      this.adventures = response;
    });
  }

}