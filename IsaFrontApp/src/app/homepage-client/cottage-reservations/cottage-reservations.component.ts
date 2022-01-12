import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-cottage-reservations',
  templateUrl: './cottage-reservations.component.html',
  styleUrls: ['./cottage-reservations.component.css']
})
export class CottageReservationsComponent implements OnInit {

houseReservations = [] as any;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getMyHouseReservations().subscribe((response: any) => {
      this.houseReservations = response;
      console.log(response);
      });

  }

}
