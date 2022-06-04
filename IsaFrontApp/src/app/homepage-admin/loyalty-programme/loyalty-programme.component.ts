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
  loyalties: any;
  editLoyaltyBox : boolean = false;
  loyalty: any;
  id: any;
  
  
    constructor(
      private formBuilder : FormBuilder,
      private router : Router,
      private api : ApiService
    ) {

      this.form = this.formBuilder.group({
        silverPoints: ['', Validators.minLength(1)],
        goldPoints: ['', Validators.minLength(1)],
        reservationPoints: ['', Validators.minLength(1)],
        reservedPoints: ['', Validators.minLength(1)],
        silverAction: ['', Validators.minLength(1)],
        goldAction: ['', Validators.minLength(1)]
      
  
     })
         

    }
    ngOnInit(): void {
      this.api.getAllLoyalties().subscribe((response:any) => {
        this.loyalties = response;
    });

    this.api.loadOneLoyalty(this.id).subscribe((response:any) => {
      this.loyalty = response;
  
      this.form.setValue({
        silverPoints: this.loyalty.silverPoints, 
        goldPoints: this.loyalty.goldPoints, 
        reservationPoints: this.loyalty.reservationPoints, 
        reservedPoints: this.loyalty.reservedPoints, 
        silverAction: this.loyalty.silverAction, 
        goldAction: this.loyalty.goldAction 
   
      });
    });
    }

    editLoyalty() {

      const silverPoints = this.form.get('silverPoints')?.value;
      const goldPoints = this.form.get('goldPoints')?.value;
      const reservationPoints = this.form.get('reservationPoints')?.value;
      const reservedPoints = this.form.get('reservedPoints')?.value;
      const silverAction = this.form.get('silverAction')?.value;
      const goldAction = this.form.get('goldAction')?.value;
      const id = this.form.get('id')?.value;
  
      let data = {
        silverPoints: silverPoints,
        goldPoints: goldPoints,
        reservationPoints: reservationPoints,
        reservedPoints: reservedPoints,
        silverAction: silverAction,
        goldAction: goldAction,
        id: parseInt(this.loyalties.id)
      }
  
      this.api.editLoyalProgramme(this.id, data).subscribe((response:any) => {
        this.loyalty = response;
        if( response != null){
          this.router.navigate(['/loyalty-programme']);
        } else if(response == null){
          alert(" Can't edit")
        }
    });
    }
  
    onSubmit() {
      if(this.form.valid) {
  
        const silverPoints = this.form.get('silverPoints')?.value;
        const goldPoints = this.form.get('goldPoints')?.value;
        const reservationPoints = this.form.get('reservationPoints')?.value;
        const reservedPoints = this.form.get('reservedPoints')?.value;
        const silverAction = this.form.get('silverAction')?.value;
        const goldAction = this.form.get('goldAction')?.value;
      
  
  
  
        let data = {
          silverPoints: silverPoints,
          goldPoints: goldPoints,
          reservationPoints: reservationPoints,
          reservedPoints: reservedPoints,
          silverAction: silverAction,
          goldAction: goldAction
        }
  
        
        this.api.addLoyalProgramme(data).subscribe((response: any) => {
          console.log(response)
      });

      location.reload();
        
       
    }  
         
          
  }
}
