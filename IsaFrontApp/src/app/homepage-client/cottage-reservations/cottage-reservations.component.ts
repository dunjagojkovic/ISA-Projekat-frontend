import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cottage-reservations',
  templateUrl: './cottage-reservations.component.html',
  styleUrls: ['./cottage-reservations.component.css']
})
export class CottageReservationsComponent implements OnInit {

user: any; 
houseReservations = [] as any;

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.getMyHouseReservations().subscribe((response: any) => {
      this.houseReservations = response;
      console.log(response);
      });

  }
  logout() {
    this.user = localStorage.clear();
    this.router.navigate(['/']);
  }

}
