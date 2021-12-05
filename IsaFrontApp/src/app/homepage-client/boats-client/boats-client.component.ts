import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-boats-client',
  templateUrl: './boats-client.component.html',
  styleUrls: ['./boats-client.component.css']
})
export class BoatsClientComponent implements OnInit {

  constructor() { }
  sortingValue = new FormControl();
  sortingList: string[] = ['Name', 'Location', 'Rate'];

  ngOnInit(): void {
  }

}
