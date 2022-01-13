import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-boat-evaluations',
  templateUrl: './boat-evaluations.component.html',
  styleUrls: ['./boat-evaluations.component.css']
})
export class BoatEvaluationsComponent implements OnInit {

  user: any = {} as any;
  id: any;
  reservation:any = {} as any;
  form: FormGroup;
  startDate:any;
  endDate:any;
  evaluation: any;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private formBuilder : FormBuilder,
    private _snackBar: MatSnackBar  
  ) { 
    this.route.queryParams
    .subscribe(params => {
      this.id = params.id;
      this.startDate = new Date(params.startDate);
      this.endDate = new Date(params.endDate);
    });
    
    this.form = this.formBuilder.group({
      content: ['', Validators.required],
      rate: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
      console.log(response);
  });

  this.api.loadOneBoatReservation(this.id).subscribe((response:any) => {
    this.reservation = response;
    console.log(response);

  });
  }

  logout(): void{
    localStorage.clear();
  }

  onSubmit(){

    const content = this.form.get('content')?.value;
    const rate = this.form.get('rate')?.value;


    let data = {
      content: content,
      clientId: this.user.id,
      boatReservationId: this.reservation.id,
      rate: rate
    }

    this.api.sendEvaluationsForBoatReservation(data).subscribe((response: any) => {
      console.log(response);
      if(response != null){
        this.evaluation = response;  
        this.router.navigate(['/reservations-client']);
        this._snackBar.open('Thank you for your evaluation. We appreciate your opinion', 'Close');
      }else if (response == null){
        this._snackBar.open('Cannot send evaluation. ', 'Close', {duration: 3000});       
       }
     
  });    
  
}

}
