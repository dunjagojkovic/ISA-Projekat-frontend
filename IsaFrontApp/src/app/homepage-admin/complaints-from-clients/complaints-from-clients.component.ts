import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-complaints-from-clients',
  templateUrl: './complaints-from-clients.component.html',
  styleUrls: ['./complaints-from-clients.component.css']
})
export class ComplaintsFromClientsComponent implements OnInit {

  user: any = {} as any;
  id: any;
  complaintResponse: any;
  complaintResponseBoat: any;
  complaintResponseHome: any;
  adventureComplaints = [] as any;
  boatComplaints = [] as any;
  homeComplaints = [] as any;
  adventureBox: boolean = false;
  boatBox: boolean = false;
  homeBox: boolean = true;
  form: FormGroup;

constructor(
  private router: Router,
  private api: ApiService,
  private _snackBar : MatSnackBar,
  private formBuilder: FormBuilder   
) { 
  this.form = this.formBuilder.group({
    complaintResponse: ['', Validators.pattern('[a-zA-Z]*')]
   


 })
}


  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
      console.log(response);
  });

}

  adventureComplaint(): void{
   
    this.api.getAllAdventureComplaintsWithoutResponse().subscribe((response:any) => {
      this.adventureComplaints = response;      
    });
  }

  boatComplaint(): void{
    this.api.getAllBoatComplaintsWithoutResponse().subscribe((response:any) => {
      this.boatComplaints = response;      
    });
   
  }

  homeComplaint(): void{
    this.api.getAllHomeComplaintsWithoutResponse().subscribe((response:any) => {
      this.homeComplaints = response;      
    }); 
   
  }

  onSendResponse(id: number){
    const complaintResponse = this.form.get('complaintResponse')?.value;
    

    let data = {
      complaintResponse: complaintResponse,
      id: id
    }
    console.log(data);

  this.api.responseToAdventureComplaint(data).subscribe((response:any) => {
    this.adventureComplaint = response;
    this._snackBar.open('User has been notified by email.', 'Close', {duration: 5000});
    location.reload();
  
  });
  }


  onSendBoatResponse(id: number){
    const complaintResponse = this.form.get('complaintResponse')?.value;
    

    let data = {
      complaintResponse: complaintResponse,
      id: id
    }
    console.log(data);

  this.api.responseToBoatComplaint(data).subscribe((response:any) => {
    this.boatComplaint = response;
    this._snackBar.open('User has been notified by email.', 'Close', {duration: 5000});
    location.reload();
  
  });
  }

  onSendHomeResponse(id: number){
    const complaintResponse = this.form.get('complaintResponse')?.value;
    

    let data = {
      complaintResponse: complaintResponse,
      id: id
    }
    console.log(data);

  this.api.responseToHomeComplaint(data).subscribe((response:any) => {
    this.homeComplaint = response;
    this._snackBar.open('User has been notified by email.', 'Close', {duration: 5000});
    location.reload();
  
  });
  }

  

}
