import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-set-free-terms',
  templateUrl: './set-free-terms.component.html',
  styleUrls: ['./set-free-terms.component.css']
})
export class SetFreeTermsComponent implements OnInit {
  form: FormGroup;
  id: any;
  user: any = {} as any;
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  terms = [] as any;
  events: CalendarEvent[] = [];

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
    this.api.current().subscribe((response:any) => {
      this.user = response;
  });
    this.api.loadHouseFreeTerms(this.id).subscribe((response:any) => {
      this.terms = response;

      console.log(response)

      for(let event of response) {
        this.events.push({
          start: new Date(event.startDate),
          end: new Date(event.endDate),
          title: event.homeProfile.name,
        })
      }
  });
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

  setView(view: CalendarView) {
    this.view = view;
  }

}
