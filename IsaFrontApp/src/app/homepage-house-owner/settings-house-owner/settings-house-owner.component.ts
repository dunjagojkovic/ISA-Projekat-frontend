import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-house-owner',
  templateUrl: './settings-house-owner.component.html',
  styleUrls: ['./settings-house-owner.component.css']
})
export class SettingsHouseOwnerComponent implements OnInit {

  constructor(private router: Router) { }

  deleteAccountBox : boolean = false;
  hide = true;

  ngOnInit(): void {
  }

}
