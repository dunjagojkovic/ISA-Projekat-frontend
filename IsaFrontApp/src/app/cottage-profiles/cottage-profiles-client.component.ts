import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-cottage-profiles-client',
  templateUrl: './cottage-profiles-client.component.html',
  styleUrls: ['./cottage-profiles-client.component.css']
})
export class CottageProfilesClientComponent implements OnInit {

  houses = [] as any;
  form: FormGroup;
  loginForm: FormGroup;
 
  constructor(
    private router: Router,
    private api: ApiService,
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

   loginBox : boolean = false;
   hide = true;
 

  ngOnInit(): void {
    this.api.loadHousesForAllUsers().subscribe((response:any) => {
      this.houses = response;
    });
  }

  onSearch(){
    const searchTerm = this.form.get('searchTerm')?.value;

   
    let data = {
      searchTerm: searchTerm   
    }

    this.api.filterHouses(data).subscribe((response: any) => {
      console.log(response);
      this.houses = response;
    });
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
        }, error => {
          this._snackBar.open('Credentials incorrect! Please try again.', 'Close', {duration: 5000})});
      })
    }
  }


}
