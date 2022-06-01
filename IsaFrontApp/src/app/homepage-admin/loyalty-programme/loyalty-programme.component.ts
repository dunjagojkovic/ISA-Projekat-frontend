import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-loyalty-programme',
  templateUrl: './loyalty-programme.component.html',
  styleUrls: ['./loyalty-programme.component.css']
})
export class LoyaltyProgrammeComponent implements OnInit {

  form: FormGroup;
  
  
  
    constructor(
      private formBuilder : FormBuilder,
      private router : Router,
      private api : ApiService
    ) {

      this.form = this.formBuilder.group({
        numberOfAllReservations: ['', Validators.minLength(1)],
        numberOfBoateReservations: ['', Validators.minLength(1)],
        numberOfHouseReservations: ['', Validators.minLength(1)],
        numberOfInstructorReservations: ['', Validators.minLength(1)],
        action: ['', Validators.minLength(1)],
  
     })
         

    }
    ngOnInit(): void {
    }
  
    onSubmit() {
      if(this.form.valid) {
  
        const numberOfAllReservations = this.form.get('numberOfAllReservations')?.value;
        const numberOfBoateReservations = this.form.get('numberOfBoatReservations')?.value;
        const numberOfHouseReservations = this.form.get('numberOfHouseReservations')?.value;
        const numberOfInstructorReservations = this.form.get('numberOfInstructorReservations')?.value;
        const action = this.form.get('action')?.value;
      
  
  
  
        let data = {
          numberOfAllReservations: numberOfAllReservations,
          numberOfBoateReservations: numberOfBoateReservations,
          numberOfHouseReservations: numberOfHouseReservations,
          numberOfInstructorReservations: numberOfInstructorReservations,
          action: action,
        }
  
        
        this.api.addLoyaltyProgramme(data).subscribe((response: any) => {
          console.log(response)
      });

      location.reload();
        
       
    }  
         
          
  }
}
