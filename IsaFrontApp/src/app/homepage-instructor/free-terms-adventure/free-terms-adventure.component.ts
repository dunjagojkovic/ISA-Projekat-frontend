import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { MatSnackBar} from '@angular/material/snack-bar';
import { TemplateParseResult } from '@angular/compiler';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-free-terms-adventure',
  templateUrl: './free-terms-adventure.component.html',
  styleUrls: ['./free-terms-adventure.component.css']
})
export class FreeTermsAdventureComponent implements OnInit {
  form: FormGroup;
  form1 : FormGroup;
  id: any;
  adventureId: any;
  instructorId: any;
  user: any = {} as any;
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  refresh = new Subject<void>();
  terms = [] as any;
  unavalibleTerms = [] as any;
  clients = [] as any;
  reservations = [] as any;
  today = new Date();
  events: CalendarEvent[] = [];
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  colors: any = {
    blue: {
      primary: '#f0f194',
      secondary: '#f0f194',
    },
    green: {
      primary: '#84A98C',
      secondary: '#84A98C',
    },
    red: {
      primary: 'rgb(156, 78, 78)',
      secondary: 'rgb(156, 78, 78)',
    }
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

    this.form1 = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
      
    })
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;

      this.load();
      
  });
    
  }

  load() {
    this.api.getAllAdventureReservations(this.id, this.user.id).subscribe((response:any) => {
      this.reservations = response;
      console.log(response);

      this.api.getClients().subscribe((response:any) => {
        this.clients = response;      
        console.log(response);
      }, () => this.getFullName());
  
      for(let event of this.reservations) {
        this.events.push({
          start: new Date(event.startDate),
          end: new Date(event.endDate),
          title:  "Reservation",
          color: this.colors.red
        })
      }

      this.api.loadAdventureFreeTerms(this.id).subscribe((response:any) => {
        this.terms = response;
        console.log('free terms', this.terms);

        for(let event of response) {
          
          if(this.isReserved(event.startDate, event.endDate, this.reservations)) {
            continue;
          }
          
          this.events.push({
            start: new Date(event.startDate),
            end: new Date(event.endDate),
            title: event.action ? "Free term - action" : "Free term",
            color: event.action ? this.colors.blue : this.colors.green
          })
        }
    });

    
    this.api.loadAdventureNotFreeTerms(this.id).subscribe((response:any) => {
      this.unavalibleTerms = response;
      console.log('unavalible terms', this.unavalibleTerms);

      for(let event of response) {
        
        if(this.isReserved(event.startDate, event.endDate, this.reservations)) {
          continue;
        }
        
        this.events.push({
          start: new Date(event.startDate),
          end: new Date(event.endDate),
          title:  "Unavalible terms",
          color: this.colors.yellow
        })
      }
  });
  });
  }

  isReserved(startDate: any, endDate: any, reservations: any) {

    for(let reservation of reservations) {

      if(reservation.startDate == startDate && reservations.endDate == endDate) {
        return true;
      }

    }

    return false;

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
        this._snackBar.open('You can not add this term. ', 'Close', {duration: 6000});   

      }
      this.load();
    });
  }

  onSave1() {

    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;


    let data = {
      startDate : startDate,
      endDate : endDate,
      adventureId: this.id
    }

    this.api.addAdventureNotFreeTerms(data).subscribe((response:any) => {
      console.log(response);
      if(response == null){
        this._snackBar.open('You can not add this term. ', 'Close', {duration: 6000});   

      }
      this.load();
    });
  }

  getFullName(): void{
    for(var reservation of this.reservations){
      for(var client of this.clients){
        if(client.id == reservation.clientId)
          this.reservations.push(client);
      }
    }
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  logout(): void{
    localStorage.clear();
  }

}
