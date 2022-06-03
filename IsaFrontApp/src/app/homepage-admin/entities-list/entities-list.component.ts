import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-entities-list',
  templateUrl: './entities-list.component.html',
  styleUrls: ['./entities-list.component.css']
})
export class EntitiesListComponent implements OnInit {
  
  id: any;
  boatId: any;
  homeId: any;
  user: any = {} as any;
  userProfiles = [] as any;
  boatProfiles = [] as any;
  homeProfiles = [] as any;
  deleteRequestsProfiles = [] as any;
  userBox: boolean = false;
  boatBox: boolean = false;
  homeBox: boolean = true;
  deleteRequestsBox: boolean = false;
  cancelReason : any;
  form: FormGroup;

constructor(
  private router: Router,
  private api: ApiService  , 
  private _snackBar : MatSnackBar,
  private formBuilder : FormBuilder 
) {
  this.form = this.formBuilder.group({
    cancelReason: ['', Validators.pattern('[a-zA-Z]*')]
  
 })
 }


  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
      console.log(response);
  });

}

  userProfile(): void{
   
    this.api.getAllActiveUsers().subscribe((response:any) => {
      this.userProfiles = response;      
    });
  }

  
  deleteRequestsProfile(): void{
   
    this.api.getAllPendingUsers().subscribe((response:any) => {
      this.deleteRequestsProfiles = response;      
    });
  }

  boatProfile(): void{
    this.api.getAllBoats().subscribe((response:any) => {
      this.boatProfiles = response;      
    });
   
  }

  homeProfile(): void{
    this.api.getAllCottages().subscribe((response:any) => {
      this.homeProfiles = response;      
    }); 
   
  }

  onDeleteAccount(id: number){
    const cancelReason = this.form.get('cancelReason')?.value;
    

    let data = {
      cancelReason: cancelReason,
      id: id
    }
    console.log(data);

  this.api.deleteUserAccount(data).subscribe((response:any) => {
    this.user = response;
    this._snackBar.open('User has been notified by email.', 'Close', {duration: 5000});
    location.reload();
  
  });
  }

  setDeleted(id: any)
  {
    
    this.api.deleteThisUser(id).subscribe((response: any) => {
      console.log(response)
    });
  }

  setDeletedBoat(id: any)
  {
    
    this.api.deleteThisBoat(id).subscribe((response: any) => {
      console.log(response)
    });
  }

  setDeletedHouse(id: any)
  {
    
    this.api.deleteMyHouse(id).subscribe((response: any) => {
      this.homeProfiles = response; 
      if(response == true){
     
        window.location.reload();
      }
    });
  }

}