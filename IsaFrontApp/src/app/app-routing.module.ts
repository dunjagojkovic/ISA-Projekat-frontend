import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { CottageProfilesClientComponent } from './cottage-profiles/cottage-profiles-client.component';
import { BoatProfilesComponent} from './boat-profiles/boat-profiles.component';
import { InstructorProfilesClientComponent } from './instructor-profiles/instructor-profiles-client.component';
import { HomepageClientComponent } from './homepage-client/homepage-client.component';
import { ProfileSettingsComponent } from './homepage-client/profile-settings/profile-settings.component';
import { CottagesClientComponent } from './homepage-client/cottages-client/cottages-client.component';
import { BoatsClientComponent } from './homepage-client/boats-client/boats-client.component';
import { InstructorsClientComponent } from './homepage-client/instructors-client/instructors-client.component';
import { HomepageHouseOwnerComponent } from './homepage-house-owner/homepage-house-owner.component';
import { SettingsHouseOwnerComponent } from './homepage-house-owner/settings-house-owner/settings-house-owner.component';
import { HistoryHouseOwnerComponent } from './homepage-house-owner/history-house-owner/history-house-owner.component';

import { HomepageAdminComponent } from './homepage-admin/homepage-admin.component';
import { RegistrationRequestsComponent } from './homepage-admin/registration-requests/registration-requests.component';
import { RegisterAdminComponent } from './homepage-admin/register-admin/register-admin.component';
import { SettingsAdminComponent } from './homepage-admin/settings-admin/settings-admin.component';
import { EntitiesListComponent } from './homepage-admin/entities-list/entities-list.component';
import { HomepageInstructorComponent } from './homepage-instructor/homepage-instructor.component';
import { AdventureProfileComponent } from './homepage-instructor/adventure-profile/adventure-profile.component';

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
  { path: "homepage-admin", component: HomepageAdminComponent},
  { path: "registration-requests", component: RegistrationRequestsComponent},
  { path: "register-admin", component: RegisterAdminComponent},
  { path: "settings-admin", component: SettingsAdminComponent},
  { path: "entities-list", component: EntitiesListComponent},
  { path: "homepage-instructor", component: HomepageInstructorComponent},
  { path: "adventure-profile", component: AdventureProfileComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppRoutingModule { }
