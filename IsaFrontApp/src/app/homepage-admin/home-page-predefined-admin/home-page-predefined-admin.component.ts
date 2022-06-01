import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home-page-predefined-admin',
  templateUrl: './home-page-predefined-admin.component.html',
  styleUrls: ['./home-page-predefined-admin.component.css']
})
export class HomePagePredefinedAdminComponent implements OnInit {

  user: any = {} as any;
  constructor( private api: ApiService ) { }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;     
  });
  }

  logout(): void{
    localStorage.clear();
  }

}
