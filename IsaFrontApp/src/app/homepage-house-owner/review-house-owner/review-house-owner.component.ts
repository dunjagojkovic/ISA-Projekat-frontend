import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-review-house-owner',
  templateUrl: './review-house-owner.component.html',
  styleUrls: ['./review-house-owner.component.css']
})
export class ReviewHouseOwnerComponent implements OnInit {

  user: any = {} as any;
  id: any;
  reservation:any = {} as any;
  form: FormGroup;
  startDate:any;
  endDate:any;
  review: any;

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
      isAppear: [],
      isBadComment: []
    })
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
      console.log(response);
  });

  this.api.loadOneHouseReservation(this.id).subscribe((response:any) => {
    this.reservation = response;
    console.log(response);

  });
  }

  onSubmit(){

    const content = this.form.get('content')?.value;
    const isAppear = this.form.get('isAppear')?.value;
    const isBadComment = this.form.get('isBadComment')?.value;

    let data = {
      content: content,
      isAppear: isAppear,
      isBadComment: isBadComment,
      clientId: this.user.id,
      homeReservationId: this.reservation.id 
    }

    this.api.sendReviewsForHouseReservation(data).subscribe((response: any) => {
      console.log(response);
      if(response != null){
        this.review = response;  
        this.router.navigate(['/history-house-owner']);
        this._snackBar.open('Your review has been sent successfully.', 'Close');
      }else if (response == null){
        this._snackBar.open('Cannot send review. ', 'Close', {duration: 3000});       
       }
     
  });    
  
}

}
