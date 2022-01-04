import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-entities-list',
  templateUrl: './entities-list.component.html',
  styleUrls: ['./entities-list.component.css']
})
export class EntitiesListComponent implements OnInit {
  
  users : any;
  id : any;
  boats : any;
  cottages : any;

  constructor(private apiService : ApiService) {

    this.users = []
   }

  ngOnInit(): void {

    this.apiService.getAllUsers().subscribe((response : any) => {
  
      this.users = response;
    })

    this.apiService.getAllCottages().subscribe((response : any) => {
  
      this.cottages = response;
    })

    this.apiService.getAllBoats().subscribe((response : any) => {
  
      this.boats = response;
    })

  }

  setDeleted(id: any)
  {
    
    this.apiService.deleteUser(id).subscribe((response: any) => {
      console.log(response)
    });
  }

}