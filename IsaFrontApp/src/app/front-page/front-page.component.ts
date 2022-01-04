import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, Validators, FormControl} from '@angular/forms';

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
    private api: ApiService
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
        });
      })
    }
  }

}
