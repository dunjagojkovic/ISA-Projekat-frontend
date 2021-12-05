import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { CottageProfilesClientComponent } from './cottage-profiles-client/cottage-profiles-client.component';
import { BoatProfilesClientComponent} from './boat-profiles-client/boat-profiles-client.component';
import { InstructorProfilesClientComponent } from './instructor-profiles-client/instructor-profiles-client.component';
import { HomepageClientComponent } from './homepage-client/homepage-client.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { HomepageHouseOwnerComponent } from './homepage-house-owner/homepage-house-owner.component';
import { SettingsHouseOwnerComponent } from './homepage-house-owner/settings-house-owner/settings-house-owner.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: "registration", component: RegistrationComponent},
  { path: "cottages", component: CottageProfilesClientComponent},
  { path: "boats", component: BoatProfilesClientComponent},
  { path: "instructors", component: InstructorProfilesClientComponent},
  { path: "home-client", component: HomepageClientComponent},
  { path: "client-profile", component: ClientProfileComponent},
  { path: "home-house-owner", component: HomepageHouseOwnerComponent},
  { path: "settings-house-owner", component: SettingsHouseOwnerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppRoutingModule { }
