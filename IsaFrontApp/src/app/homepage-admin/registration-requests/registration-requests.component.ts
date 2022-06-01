import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent implements OnInit {

  users: any;
  user: any;
  status: any;
  id: any;
  cancelReason: any;
  form: FormGroup;
  
 
  constructor(private apiService: ApiService, private _snackBar : MatSnackBar,private formBuilder : FormBuilder )
  {
    this.users = []
    this.form = this.formBuilder.group({
      cancelReason: ['', Validators.pattern('[a-zA-Z]*')]
     


   })
    
  }
  

  ngOnInit(): void {

    this.apiService.getUsers().subscribe((response : any) => {
  
      this.users = response;
    })
  }

  setActive(id: any) {
    this.apiService.approveUser(id).subscribe((response: any) => {
      this._snackBar.open('User has been notified by email.', 'Close', {duration: 5000});
      location.reload();

    });
  }  

  onSave(id: number){
    const cancelReason = this.form.get('cancelReason')?.value;
    

    let data = {
      cancelReason: cancelReason,
      id: id
    }
    console.log(data);

  this.apiService.declineUser(data).subscribe((response:any) => {
    this.user = response;
    this._snackBar.open('User has been notified by email.', 'Close', {duration: 5000});
    location.reload();
  
  });
  }

 

}
