import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthGuard } from './auth.guard';
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
import { BoatEvaluationsComponent } from './homepage-client/boat-evaluations/boat-evaluations.component';
import { InstructorEvaluationsComponent } from './homepage-client/instructor-evaluations/instructor-evaluations.component';
import { ReviewHouseOwnerComponent } from './homepage-house-owner/review-house-owner/review-house-owner.component';
import { ReserveHouseOwnerComponent } from './homepage-house-owner/reserve-house-owner/reserve-house-owner.component';
import { HistoryBoatOwnerComponent } from './homepage-boat-owner/history-boat-owner/history-boat-owner.component';
import { MapsHouseOwnerComponent } from './homepage-house-owner/maps-house-owner/maps-house-owner.component';
import { MapsBoatOwnerComponent } from './homepage-boat-owner/maps-boat-owner/maps-boat-owner.component';
import { ReviewBoatOwnerComponent } from './homepage-boat-owner/review-boat-owner/review-boat-owner.component';
import { ReserveBoatOwnerComponent } from './homepage-boat-owner/reserve-boat-owner/reserve-boat-owner.component';
import { ReportHouseOwnerComponent } from './homepage-house-owner/report-house-owner/report-house-owner.component';
import { ReportBoatOwnerComponent } from './homepage-boat-owner/report-boat-owner/report-boat-owner.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: "registration", component: RegistrationComponent},
  { path: "cottages", component: CottageProfilesClientComponent},
  { path: "boats", component: BoatProfilesComponent},
  { path: "instructors", component: InstructorProfilesClientComponent},
  { path: "home-client", component: HomepageClientComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "settings-client", component: ProfileSettingsComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "cottages-client", component: CottagesClientComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "boats-client", component: BoatsClientComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "instructors-client", component: InstructorsClientComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "home-house-owner", component: HomepageHouseOwnerComponent, canActivate: [AuthGuard],  data: {role: 'House owner'}},
  { path: "settings-house-owner", component: SettingsHouseOwnerComponent, canActivate: [AuthGuard],  data: {role: 'House owner'}},
  { path: "history-house-owner", component: HistoryHouseOwnerComponent, canActivate: [AuthGuard],  data: {role: 'House owner'}},
  { path: "set-house-terms", component: SetFreeTermsComponent, canActivate: [AuthGuard],  data: {role: 'House owner'}},
  { path: "edit-house-info", component: EdithouseHouseOwnerComponent, canActivate: [AuthGuard],  data: {role: 'House owner'}},
  { path: "filter-free-cottages", component: SearchFreeCottagesClientComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "filter-free-boats", component: SearchFreeBoatsClientComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "filter-free-instructors", component: SearchFreeInstructorsClientComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "reserve-boats-standard-client", component: ReserveBoatsStandardComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "reserve-instructors-standard-client", component: ReserveInstructorsStandardComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "reserve-cottages-standard-client", component: ReserveCottagesStandardComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "home-boat-owner", component: HomepageBoatOwnerComponent, canActivate: [AuthGuard],  data: {role: 'Boat owner'}},
  { path: "settings-boat-owner", component: SettingsBoatOwnerComponent, canActivate: [AuthGuard],  data: {role: 'Boat owner'}},
  { path: "cottage-reservations-client", component: CottageReservationsComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "reservations-client", component: ReservationsClientComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "cottage-actions-client", component: CottageActionsComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "boat-actions-client", component: BoatActionsComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "instructor-actions-client", component: InstructorActionsComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "edit-boat-info", component: EditboatBoatOwnerComponent, canActivate: [AuthGuard],  data: {role: 'Boat owner'}},
  { path: "set-boat-terms", component: SetTermsBoatsComponent, canActivate: [AuthGuard],  data: {role: 'Boat owner'}},
  { path: "cottage-complaints-client", component: CottageComplaintsComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "boat-complaints-client", component: BoatComplaintsComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "instructor-complaints-client", component: InstructorComplaintsComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "cottage-evaluations-client", component: CottageEvaluationsComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "boat-evaluations-client", component: BoatEvaluationsComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "instructor-evaluations-client", component: InstructorEvaluationsComponent, canActivate: [AuthGuard],  data: {role: 'Client'}},
  { path: "review-house-owner", component: ReviewHouseOwnerComponent, canActivate: [AuthGuard],  data: {role: 'House owner'}},
  { path: "reserve-house-owner", component: ReserveHouseOwnerComponent, canActivate: [AuthGuard],  data: {role: 'House owner'}},
  { path: "history-boat-owner", component: HistoryBoatOwnerComponent, canActivate: [AuthGuard],  data: {role: 'Boat owner'}},
  { path: "maps-house-owner", component: MapsHouseOwnerComponent, canActivate: [AuthGuard],  data: {role: 'House owner'}},
  { path: "maps-boat-owner", component: MapsBoatOwnerComponent, canActivate: [AuthGuard],  data: {role: 'Boat owner'}},
  { path: "review-boat-owner", component: ReviewBoatOwnerComponent, canActivate: [AuthGuard],  data: {role: 'Boat owner'}},
  { path: "reserve-boat-owner", component: ReserveBoatOwnerComponent, canActivate: [AuthGuard],  data: {role: 'Boat owner'}},
  { path: "report-house-owner", component: ReportHouseOwnerComponent, canActivate: [AuthGuard],  data: {role: 'House owner'}},
  { path: "report-boat-owner", component: ReportBoatOwnerComponent, canActivate: [AuthGuard],  data: {role: 'Boat owner'}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppRoutingModule { }
