import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';




@Component({
  selector: 'app-boat-profiles-client', 
  templateUrl: './boat-profiles-client.component.html',
  styleUrls: ['./boat-profiles-client.component.css'], 
})
export class BoatProfilesComponent implements OnInit {

  boats = [] as any;
  form: FormGroup;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private api: ApiService ,
    private formBuilder : FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      searchTerm: ['']     
    });
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.api.loadBoatsForAllUsers().subscribe((response:any) => {
      this.boats = response;
    });
  }
 
  onSearch(){
    const searchTerm = this.form.get('searchTerm')?.value;

   
    let data = {
      searchTerm: searchTerm   
    }

    this.api.filterBoats(data).subscribe((response: any) => {
      console.log(response);
      this.boats = response;
    });
  }

  loginBox : boolean = false;
  hide = true;

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
        }, error => {
          this._snackBar.open('Password incorrect! Please try again.', 'Close', {duration: 5000})});
      })
    }
  }


}
  

