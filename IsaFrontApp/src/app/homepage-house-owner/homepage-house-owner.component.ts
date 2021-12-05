import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-house-owner',
  templateUrl: './homepage-house-owner.component.html',
  styleUrls: ['./homepage-house-owner.component.css']
})
export class HomepageHouseOwnerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
