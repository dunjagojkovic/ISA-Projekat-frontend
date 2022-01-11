import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CalendarEvent, CalendarView } from 'angular-calendar';


@Component({
  selector: 'app-set-terms-boats',
  templateUrl: './set-terms-boats.component.html',
  styleUrls: ['./set-terms-boats.component.css']
})
export class SetTermsBoatsComponent implements OnInit {
  form: FormGroup;
  id: any;
  user: any = {} as any;
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  terms = [] as any;
  events: CalendarEvent[] = [];
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  colors: any = {
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    green: {
      primary: '#84A98C',
      secondary: '#ebf0e9',
    },
  };

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
      endDate: ['', Validators.required],
      actionPrice: [''],
      isAction: ['']
    })
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;
  });
    this.api.loadBoatFreeTerms(this.id).subscribe((response:any) => {
      this.terms = response;

      console.log(response)

      for(let event of response) {
        this.events.push({
          start: new Date(event.startDate),
          end: new Date(event.endDate),
          title: event.action ? "Free term - action" : "Free term",
          color: event.action ? this.colors.blue : this.colors.green
        })
      }
  });
  }

  onSave() {

    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;
    const actionPrice = this.form.get('actionPrice')?.value;
    const isAction = this.form.get('isAction')?.value;

    let data = {
      startDate : startDate,
      endDate : endDate,
      actionPrice: actionPrice,
      isAction: isAction,
      boatId: this.id
    }

    this.api.addBoatFreeTerms(data).subscribe((response:any) => {
      console.log(response)
    });

    location.reload();
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  logout(): void{
    localStorage.clear();
  }
}
