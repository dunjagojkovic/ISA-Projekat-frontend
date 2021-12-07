import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-house-owner',
  templateUrl: './history-house-owner.component.html',
  styleUrls: ['./history-house-owner.component.css']
})
export class HistoryHouseOwnerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}