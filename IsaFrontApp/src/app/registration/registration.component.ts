import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

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
    private api: ApiService
    ) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required]

    })
   } 

  ngOnInit(): void {
  }

  onSubmit() {
    //if(this.form.valid) 

    try {
      const name = this.form.get('name')?.value;
      const surname = this.form.get('surname')?.value;
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;
      const address = this.form.get('address')?.value;
      const city = this.form.get('city')?.value;
      const country = this.form.get('country')?.value;
      const phoneNumber = this.form.get('phoneNumber')?.value;
      const description = this.form.get('description')?.value;
      const type = this.form.get('type')?.value;

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
        this.api.registerClient(data).subscribe( (any: any) => this.router.navigate(['/']));
      }
      else if (type == "House owner"){
        this.api.registerClient(data).subscribe( (any: any) => this.router.navigate(['/']));
      }
      else if (type == "Boat owner"){
        this.api.registerClient(data).subscribe( (any: any) => this.router.navigate(['/']));
      }
      else {
        this.api.registerClient(data).subscribe( (any: any) => this.router.navigate(['/']));
      }
    }
    catch {
      this.router.navigate(['/'])
    }
  }


}