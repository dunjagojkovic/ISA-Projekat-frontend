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
import { HomepageBoatOwnerComponent } from './homepage-boat-owner/homepage-boat-owner.component';
import { SettingsBoatOwnerComponent } from './homepage-boat-owner/settings-boat-owner/settings-boat-owner.component';
import { ReserveCottagesStandardComponent } from './homepage-client/reserve-cottages-standard/reserve-cottages-standard.component';
import { CottageReservationsComponent } from './homepage-client/cottage-reservations/cottage-reservations.component';
import { SearchFreeBoatsClientComponent } from './homepage-client/search-free-boats-client/search-free-boats-client.component';
import { SearchFreeInstructorsClientComponent } from './homepage-client/search-free-instructors-client/search-free-instructors-client.component';
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
import { ReviewHouseOwnerComponent } from './homepage-house-owner/review-house-owner/review-house-owner.component';
import { ReserveHouseOwnerComponent } from './homepage-house-owner/reserve-house-owner/reserve-house-owner.component';
import { HistoryBoatOwnerComponent } from './homepage-boat-owner/history-boat-owner/history-boat-owner.component';
import { MapsHouseOwnerComponent } from './homepage-house-owner/maps-house-owner/maps-house-owner.component';
import { MapsBoatOwnerComponent } from './homepage-boat-owner/maps-boat-owner/maps-boat-owner.component';
import { ReviewBoatOwnerComponent } from './homepage-boat-owner/review-boat-owner/review-boat-owner.component';
import { ReserveBoatOwnerComponent } from './homepage-boat-owner/reserve-boat-owner/reserve-boat-owner.component';
import { ReportHouseOwnerComponent } from './homepage-house-owner/report-house-owner/report-house-owner.component';

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
  { path: "filter-free-boats", component: SearchFreeBoatsClientComponent},
  { path: "filter-free-instructors", component: SearchFreeInstructorsClientComponent},
  { path: "reserve-boats-standard-client", component: ReserveBoatsStandardComponent},
  { path: "reserve-instructors-standard-client", component: ReserveInstructorsStandardComponent},
  { path: "reserve-cottages-standard-client", component: ReserveCottagesStandardComponent},
  { path: "home-boat-owner", component: HomepageBoatOwnerComponent},
  { path: "settings-boat-owner", component: SettingsBoatOwnerComponent},
  { path: "cottage-reservations-client", component: CottageReservationsComponent},
  { path: "reservations-client", component: ReservationsClientComponent},
  { path: "cottage-actions-client", component: CottageActionsComponent},
  { path: "boat-actions-client", component: BoatActionsComponent},
  { path: "instructor-actions-client", component: InstructorActionsComponent},
  { path: "edit-boat-info", component: EditboatBoatOwnerComponent},
  { path: "set-boat-terms", component: SetTermsBoatsComponent},
  { path: "cottage-complaints-client", component: CottageComplaintsComponent},
  { path: "boat-complaints-client", component: BoatComplaintsComponent},
  { path: "instructor-complaints-client", component: InstructorComplaintsComponent},
  { path: "cottage-evaluations-client", component: CottageEvaluationsComponent},
  { path: "review-house-owner", component: ReviewHouseOwnerComponent},
  { path: "reserve-house-owner", component: ReserveHouseOwnerComponent},
  { path: "history-boat-owner", component: HistoryBoatOwnerComponent},
  { path: "maps-house-owner", component: MapsHouseOwnerComponent},
  { path: "maps-boat-owner", component: MapsBoatOwnerComponent},
  { path: "review-boat-owner", component: ReviewBoatOwnerComponent},
  { path: "reserve-boat-owner", component: ReserveBoatOwnerComponent},
  { path: "report-house-owner", component: ReportHouseOwnerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppRoutingModule { }
