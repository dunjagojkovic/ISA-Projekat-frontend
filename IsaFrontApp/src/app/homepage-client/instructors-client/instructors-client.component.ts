import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-instructors-client',
  templateUrl: './instructors-client.component.html',
  styleUrls: ['./instructors-client.component.css']
})
export class InstructorsClientComponent implements OnInit {

  constructor() { }
  sortingValue = new FormControl();
  sortingList: string[] = ['Name', 'Location', 'Rate'];


  ngOnInit(): void {
  }

}
