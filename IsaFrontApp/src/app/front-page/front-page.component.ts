import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder : FormBuilder,
    private api: ApiService,
    private _snackBar: MatSnackBar
    ) {
      this.form = this.formBuilder.group({
        email: ['', Validators.email],
        password: ['', Validators.required]
      })
     }

  loginBox : boolean = false;
  hide = true;

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.form.valid){
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;

      let data = {
        email: email,
        password: password
      }

      this.api.login(data).subscribe((any: any) => {
        localStorage.setItem('token', any.token);

        this.api.current().subscribe((user: any) => {
          localStorage.setItem('user', JSON.stringify(user));
          if(user.type == "Client"){
            this.router.navigate(['/home-client']);
          }
          else if(user.type == "House owner"){
            this.router.navigate(['/home-house-owner']);
          }
          else if(user.type == "Boat owner"){
            this.router.navigate(['/home-boat-owner']);
          }

          else if(user.type == "Fishing instructor"){
            this.router.navigate(['/homepage-instructor']);
          }
          else if(user.type == "Admin"){
            this.router.navigate(['/predefined-admin']);
          }
          else if(user.type == "PredefinedAdmin"){
            this.router.navigate(['/homepage-admin']);
          }
          else if(user.type == "NewAdmin"){
            this.router.navigate(['/settings-admin']);
          }
        });

        }, error => {

          this._snackBar.open('Password incorrect! Please try again.', 'Close', {duration: 5000})});

      }

  }
}