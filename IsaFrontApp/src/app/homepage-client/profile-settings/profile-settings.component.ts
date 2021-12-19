import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  deleteAccountBox : boolean = false;
  hide = true;
  user: any = {} as any;
  form: FormGroup;
  
  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private api: ApiService   
    ) { 

      this.form = this.formBuilder.group({

        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        description: ['', Validators.required],
        password: ['', Validators.required],
        type: ['', Validators.required],
        id: ['', Validators.required],    
        

      })

    }


  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;     
      console.log(response); 
  });
  }

  savePersonalInfo() {

    const name = this.form.get('name')?.value;
    const surname = this.form.get('surname')?.value;
    const email = this.form.get('email')?.value;
    const address = this.form.get('address')?.value;
    const city = this.form.get('city')?.value;
    const country = this.form.get('country')?.value;
    const phoneNumber = this.form.get('phoneNumber')?.value;
    const description = this.form.get('description')?.value;
    const password = this.form.get('password')?.value;
    const type = this.form.get('type')?.value;
    const id = this.form.get('id')?.value;

    let data = {

      name: name,
      surname: surname,
      email: email,
      address: address,
      city: city,
      country: country,
      phoneNumber: phoneNumber,
      description: description,
      password: password,
      type: type
    }

    this.api.editInfo(id, data).subscribe((response: any) => {
      console.log(response);
    });
  }

}
