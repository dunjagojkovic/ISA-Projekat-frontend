import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { CottageProfilesClientComponent } from './cottage-profiles/cottage-profiles-client.component';
import { CottagesClientComponent } from './homepage-client/cottages-client/cottages-client.component';
import { BoatProfilesComponent} from './boat-profiles/boat-profiles.component';
import { BoatsClientComponent } from './homepage-client/boats-client/boats-client.component';
import { InstructorProfilesClientComponent } from './instructor-profiles/instructor-profiles-client.component';
import { InstructorsClientComponent } from './homepage-client/instructors-client/instructors-client.component';
import { HomepageClientComponent } from './homepage-client/homepage-client.component';
import { HomepageHouseOwnerComponent } from './homepage-house-owner/homepage-house-owner.component';
import { ProfileSettingsComponent } from './homepage-client/profile-settings/profile-settings.component';
import { SettingsHouseOwnerComponent } from './homepage-house-owner/settings-house-owner/settings-house-owner.component';
import { HistoryHouseOwnerComponent } from './homepage-house-owner/history-house-owner/history-house-owner.component';
import { SetFreeTermsComponent } from './homepage-house-owner/set-free-terms/set-free-terms.component';
import { EdithouseHouseOwnerComponent } from './homepage-house-owner/edithouse-house-owner/edithouse-house-owner.component';
import { SearchFreeCottagesClientComponent } from './homepage-client/search-free-cottages-client/search-free-cottages-client.component';
import { ReserveCottagesStandardComponent } from './homepage-client/reserve-cottages-standard/reserve-cottages-standard.component';
import { CottageReservationsComponent } from './homepage-client/cottage-reservations/cottage-reservations.component';


const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: "registration", component: RegistrationComponent},
  { path: "cottages", component: CottageProfilesClientComponent},
  { path: "boats", component: BoatProfilesComponent},
  { path: "instructors", component: InstructorProfilesClientComponent},
  { path: "home-client", component: HomepageClientComponent},
  { path: "settings-client", component: ProfileSettingsComponent},
  { path: "cottages-client", component: CottagesClientComponent},
  { path: "boats-client", component: BoatsClientComponent},
  { path: "instructors-client", component: InstructorsClientComponent},
  { path: "home-house-owner", component: HomepageHouseOwnerComponent},
  { path: "settings-house-owner", component: SettingsHouseOwnerComponent},
  { path: "history-house-owner", component: HistoryHouseOwnerComponent},
  { path: "set-house-terms", component: SetFreeTermsComponent},
  { path: "edit-house-info", component: EdithouseHouseOwnerComponent},
  { path: "filter-free-cottages", component: SearchFreeCottagesClientComponent},
  { path: "reserve-cottages-standard-client", component: ReserveCottagesStandardComponent},
  { path: "reservations-client", component: CottageReservationsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppRoutingModule { }
