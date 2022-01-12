import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;  
  hide = true;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private api: ApiService,
    private _snackBar: MatSnackBar
    ) {

    this.form = this.formBuilder.group({
      name: ['', Validators.pattern('[a-zčćžšđA-ZČĆŽŠĐ]*')],
      surname: ['', Validators.pattern('[a-zčćžšđA-ZČĆŽŠĐ]*')],
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.pattern('[a-zčćžšđA-ZČĆŽŠĐ]*')],
      country: ['', Validators.pattern('[a-zčćžšđA-ZČĆŽŠĐ]*')],
      phoneNumber: ['', Validators.minLength(10)],
      description: [''],
      type: ['', Validators.required]

    })
   } 

  

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.form.valid) {

      const name = this.form.get('name')?.value;
      const surname = this.form.get('surname')?.value;
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;
      const passwordRepeat = this.form.get('passwordRepeat')?.value;
      const address = this.form.get('address')?.value;
      const city = this.form.get('city')?.value;
      const country = this.form.get('country')?.value;
      const phoneNumber = this.form.get('phoneNumber')?.value;
      const description = this.form.get('description')?.value;
      const type = this.form.get('type')?.value;

      if(passwordRepeat != password) {
        alert('Passwords do not match')
        return;
      }

      let data = {
        name: name,
        surname: surname,
        email: email,
        password: password,
        address: address,
        city: city,
        country: country,
        phoneNumber: phoneNumber,
        description: description,
        type: type
      }

      if(type == "Client") {
        this.api.registerClient(data).subscribe( (any: any) => {
          this.router.navigate(['/'])
        }, error => {
          this._snackBar.open('Email already exists', 'Close', {duration: 5000})
        });
        this._snackBar.open('Registration request successfully submited! Check your email in order to activate your account.', 'Close', {duration: 5000})
      }
      else if (type == "House owner"){
        this.api.registerHouseOwner(data).subscribe( (any: any) => {

          this.router.navigate(['/'])
        },  error => {
          alert('Email already exists')
        });
      }
      else if (type == "Boat owner"){
        this.api.registerBoatOwner(data).subscribe( (any: any) => {
          this.router.navigate(['/'])
        },  error => {
          alert('Email already exists')
        });
       }

       else if (type == "Fishing instructor"){
        this.api.registerFishingInstructor(data).subscribe( (response: any) => {
          this.router.navigate(['/'])
        },  (error: any) => {
          alert('Email already exists')
        });
       }
    
    
  }
   
}
}
 
