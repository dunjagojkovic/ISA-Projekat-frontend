import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  form: FormGroup;  
  type: any;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private api: ApiService   
   
    ) {

    this.form = this.formBuilder.group({      
      email: ['', Validators.email],
      password: ['', Validators.required],     
    })
   } 


  loginBox : boolean = false;
  hide = true;

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.form.valid) {   
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;     

      let data = {       
        email: email,
        password: password,
       
      }      
      if(this.type == "Client")
      this.api.loginUser(data).subscribe( (any: any) => this.router.navigate(['home-client']));
    }  


  }
}