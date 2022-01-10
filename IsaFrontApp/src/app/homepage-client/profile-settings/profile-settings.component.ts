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
  changePasswordBox : boolean = false;
  hide = true;
  user: any = {} as any;
  form: FormGroup;
  formPassword: FormGroup;
  
  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private api: ApiService   
    ) { 

      this.form = this.formBuilder.group({

        name: ['', Validators.pattern('[a-zčćžšđA-ZČĆŽŠĐ]*')],
        surname: ['', Validators.pattern('[a-zčćžšđA-ZČĆŽŠĐ]*')],
        email: ['', Validators.required],
        address: ['', Validators.minLength(3)],
        city: ['', Validators.pattern('[a-zčćžšđA-ZČĆŽŠĐ]*')],
        country: ['', Validators.pattern('[a-zčćžšđA-ZČĆŽŠĐ]*')],
        phoneNumber: ['', Validators.minLength(10)],
        password: [''],
        type: ['', Validators.required],
        id: ['', Validators.required]
      })

      this.formPassword = this.formBuilder.group({

        oldPassword: [''],
        newPassword: [''],
        passwordRepeat: ['']

      })

    }


  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;     
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

  logout() {
    this.user = null;
    this.router.navigate(['/']);
  }

  onDeleteRequest(id: number) {
    this.api.sendDeleteRequest(id).subscribe((response: any) => {
      console.log(response);});
  }

  saveNewPassword() {

    const newPassword = this.formPassword.get('newPassword')?.value;
    const oldPassword = this.formPassword.get('oldPassword')?.value;
    const passwordRepeat = this.formPassword.get('passwordRepeat')?.value;

    if(passwordRepeat != newPassword) {
      alert('Passwords do not match')
      return;
    }

    let data = {
      newPassword: newPassword,
      oldPassword: oldPassword
    }

    this.api.changePassword(data).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/home-client']);
    });
  }

}
