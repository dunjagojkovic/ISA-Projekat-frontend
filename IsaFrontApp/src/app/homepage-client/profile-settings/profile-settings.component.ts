import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  constructor() { }
  deleteAccountBox : boolean = false;
  hide = true;


  ngOnInit(): void {
  }

}
