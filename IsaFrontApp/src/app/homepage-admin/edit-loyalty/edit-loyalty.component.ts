import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-loyalty',
  templateUrl: './edit-loyalty.component.html',
  styleUrls: ['./edit-loyalty.component.css']
})
export class EditLoyaltyComponent implements OnInit {

  form: FormGroup;
  user: any = {} as any;
  loyalty: any;
  id: any;
  
  
    constructor(
      private formBuilder : FormBuilder,
      private router : Router,
      private route: ActivatedRoute,
      private api : ApiService
    ) {

      this.route.queryParams
      .subscribe(params => {
        this.id=params.id;
      }
      );


      this.form = this.formBuilder.group({
        silverPoints: [''],
        goldPoints: [''],
        reservationPoints: [''],
        reservedPoints: [''],
        silverAction: [''],
        goldAction: ['']
      
  
     })
         

    }
    ngOnInit(): void {
      this.api.current().subscribe((response:any) => {
        this.user = response;
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
    
  
      let data = {
        silverPoints: silverPoints,
        goldPoints: goldPoints,
        reservationPoints: reservationPoints,
        reservedPoints: reservedPoints,
        silverAction: silverAction,
        goldAction: goldAction,
        id: parseInt(this.loyalty.id)
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

}
