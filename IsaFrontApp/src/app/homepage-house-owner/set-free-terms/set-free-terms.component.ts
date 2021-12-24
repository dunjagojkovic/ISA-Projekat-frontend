import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-set-free-terms',
  templateUrl: './set-free-terms.component.html',
  styleUrls: ['./set-free-terms.component.css']
})
export class SetFreeTermsComponent implements OnInit {
  form: FormGroup;
  id: any;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService   
  ) { 

    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
      }
    );

    this.form = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSave() {

    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;

    let data = {
      startDate : startDate,
      endDate : endDate,
      houseId: this.id
    }

    this.api.addHouseFreeTerms(data).subscribe((response:any) => {
      console.log(response)
    });

  }

}
