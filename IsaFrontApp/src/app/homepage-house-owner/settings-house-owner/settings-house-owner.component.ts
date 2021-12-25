import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-settings-house-owner',
  templateUrl: './settings-house-owner.component.html',
  styleUrls: ['./settings-house-owner.component.css']
})
export class SettingsHouseOwnerComponent implements OnInit {

  constructor(private router: Router,
    private api: ApiService   ) { }

  deleteAccountBox : boolean = false;
  hide = true;
  user: any = {} as any;

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;
  });
  }

}
