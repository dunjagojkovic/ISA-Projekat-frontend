import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-client',
  templateUrl: './homepage-client.component.html',
  styleUrls: ['./homepage-client.component.css']
})
export class HomepageClientComponent implements OnInit {

  constructor(private router: Router) { }
   deleteAccountBox : boolean = false;
  hide = true;


  ngOnInit(): void {
  }

}
