import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-cottage-actions',
  templateUrl: './cottage-actions.component.html',
  styleUrls: ['./cottage-actions.component.css']
})
export class CottageActionsComponent implements OnInit {

  actions = [] as any;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getAllHouseActions().subscribe((response: any) => {
      this.actions = response;
      console.log(response);
      });

  }

}
