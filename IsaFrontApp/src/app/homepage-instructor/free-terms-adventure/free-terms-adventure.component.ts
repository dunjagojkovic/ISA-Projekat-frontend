import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { MatSnackBar} from '@angular/material/snack-bar';
import { TemplateParseResult } from '@angular/compiler';

@Component({
  selector: 'app-free-terms-adventure',
  templateUrl: './free-terms-adventure.component.html',
  styleUrls: ['./free-terms-adventure.component.css']
})
export class FreeTermsAdventureComponent implements OnInit {
  form: FormGroup;
  id: any;
  user: any = {} as any;
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  terms = [] as any;
  today = new Date();
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
    private _snackBar: MatSnackBar,
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
    this.api.loadAdventureFreeTerms(this.id).subscribe((response:any) => {
      this.terms = response;
      console.log(response);

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
      adventureId: this.id
    }

    this.api.addAdventureFreeTerms(data).subscribe((response:any) => {
      console.log(response);
      if(response == null){
        this._snackBar.open('You can not add this term. ', 'Close', {duration: 3000});   

      }
    });

    location.reload();
  }

  setView(view: CalendarView) {
    this.view = view;
  }

}
