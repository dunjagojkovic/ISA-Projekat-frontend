import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CottageProfilesClientComponent } from './cottage-profiles/cottage-profiles-client.component';
import { HomepageClientComponent } from './homepage-client/homepage-client.component';
import { BoatProfilesComponent } from './boat-profiles/boat-profiles.component';
import { ProfileSettingsComponent } from './homepage-client/profile-settings/profile-settings.component';
import { CottagesClientComponent } from './homepage-client/cottages-client/cottages-client.component';
import { BoatsClientComponent } from './homepage-client/boats-client/boats-client.component';
import { InstructorsClientComponent } from './homepage-client/instructors-client/instructors-client.component';
import { HomepageHouseOwnerComponent } from './homepage-house-owner/homepage-house-owner.component';
import { SettingsHouseOwnerComponent } from './homepage-house-owner/settings-house-owner/settings-house-owner.component';


import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
    AdventureProfileComponent
   
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
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
