import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CottageProfilesClientComponent } from './cottage-profiles/cottage-profiles-client.component';
import { CottagesClientComponent } from './homepage-client/cottages-client/cottages-client.component';
import { BoatProfilesComponent } from './boat-profiles/boat-profiles.component';
import { BoatsClientComponent } from './homepage-client/boats-client/boats-client.component';
import { InstructorsClientComponent } from './homepage-client/instructors-client/instructors-client.component';
import { InstructorProfilesClientComponent } from './instructor-profiles/instructor-profiles-client.component';
import { HomepageClientComponent } from './homepage-client/homepage-client.component';
import { HomepageHouseOwnerComponent } from './homepage-house-owner/homepage-house-owner.component';
import { ProfileSettingsComponent } from './homepage-client/profile-settings/profile-settings.component';
import { SettingsHouseOwnerComponent } from './homepage-house-owner/settings-house-owner/settings-house-owner.component';
import { SearchFreeCottagesClientComponent } from './homepage-client/search-free-cottages-client/search-free-cottages-client.component';
import { ReserveCottagesStandardComponent } from './homepage-client/reserve-cottages-standard/reserve-cottages-standard.component';
import { CottageReservationsComponent } from './homepage-client/cottage-reservations/cottage-reservations.component';
import { SearchFreeBoatsClientComponent } from './homepage-client/search-free-boats-client/search-free-boats-client.component';
import { SearchFreeInstructorsClientComponent } from './homepage-client/search-free-instructors-client/search-free-instructors-client.component';
import { HistoryHouseOwnerComponent } from './homepage-house-owner/history-house-owner/history-house-owner.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomepageAdminComponent } from './homepage-admin/homepage-admin.component';
import { RegistrationRequestsComponent } from './homepage-admin/registration-requests/registration-requests.component';
import { RegisterAdminComponent } from './homepage-admin/register-admin/register-admin.component';
import { SettingsAdminComponent } from './homepage-admin/settings-admin/settings-admin.component';
import { EntitiesListComponent } from './homepage-admin/entities-list/entities-list.component';
import { HomepageInstructorComponent } from './homepage-instructor/homepage-instructor.component';
import { AdventureProfileComponent } from './homepage-instructor/adventure-profile/adventure-profile.component';


import { SetFreeTermsComponent } from './homepage-house-owner/set-free-terms/set-free-terms.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EdithouseHouseOwnerComponent } from './homepage-house-owner/edithouse-house-owner/edithouse-house-owner.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HomepageBoatOwnerComponent } from './homepage-boat-owner/homepage-boat-owner.component';
import { SettingsBoatOwnerComponent } from './homepage-boat-owner/settings-boat-owner/settings-boat-owner.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReserveBoatsStandardComponent } from './homepage-client/reserve-boats-standard/reserve-boats-standard.component';
import { ReserveInstructorsStandardComponent } from './homepage-client/reserve-instructors-standard/reserve-instructors-standard.component';
import { ReservationsClientComponent } from './homepage-client/reservations-client/reservations-client.component';
import { CottageActionsComponent } from './homepage-client/cottage-actions/cottage-actions.component';
import { BoatActionsComponent } from './homepage-client/boat-actions/boat-actions.component';
import { InstructorActionsComponent } from './homepage-client/instructor-actions/instructor-actions.component';
import { EditboatBoatOwnerComponent } from './homepage-boat-owner/editboat-boat-owner/editboat-boat-owner.component';
import { SetTermsBoatsComponent } from './homepage-boat-owner/set-terms-boats/set-terms-boats.component';
import { CottageComplaintsComponent } from './homepage-client/cottage-complaints/cottage-complaints.component';
import { BoatComplaintsComponent } from './homepage-client/boat-complaints/boat-complaints.component';
import { InstructorComplaintsComponent } from './homepage-client/instructor-complaints/instructor-complaints.component';
import { CottageEvaluationsComponent } from './homepage-client/cottage-evaluations/cottage-evaluations.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    FrontPageComponent,
    CottageProfilesClientComponent,
    BoatProfilesComponent,
    HomepageClientComponent,
    ProfileSettingsComponent,
    CottagesClientComponent,
    BoatsClientComponent,
    InstructorsClientComponent,
    HomepageClientComponent,
    HomepageHouseOwnerComponent,
    SettingsHouseOwnerComponent,
    HomepageAdminComponent,
    RegistrationRequestsComponent,
    RegisterAdminComponent,
    SettingsAdminComponent,
    EntitiesListComponent,
    HomepageInstructorComponent,
    AdventureProfileComponent,
   
    InstructorProfilesClientComponent,
    SetFreeTermsComponent,
    EdithouseHouseOwnerComponent,
    SearchFreeCottagesClientComponent,
    ReserveCottagesStandardComponent,
    CottageReservationsComponent,
    SearchFreeBoatsClientComponent,
    SearchFreeInstructorsClientComponent,
    ReserveBoatsStandardComponent,
    ReserveInstructorsStandardComponent,
    HomepageBoatOwnerComponent,
    SettingsBoatOwnerComponent,
    ReservationsClientComponent,
    CottageActionsComponent,
    BoatActionsComponent,
    InstructorActionsComponent,
    EditboatBoatOwnerComponent,
    SetTermsBoatsComponent,
    CottageComplaintsComponent,
    BoatComplaintsComponent,
    InstructorComplaintsComponent,
    CottageEvaluationsComponent,
    HistoryHouseOwnerComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatSnackBarModule
   ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
