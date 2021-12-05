import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-cottages-client',
  templateUrl: './cottages-client.component.html',
  styleUrls: ['./cottages-client.component.css']
})
export class CottagesClientComponent implements OnInit {

  constructor() { }
  sortingValue = new FormControl();
  sortingList: string[] = ['Name', 'Location', 'Rate'];

  ngOnInit(): void {
  }

}
