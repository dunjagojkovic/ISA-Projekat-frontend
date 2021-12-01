import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CottageProfilesClientComponent } from './cottage-profiles-client/cottage-profiles-client.component';
import { BoatProfilesClientComponent} from './boat-profiles-client/boat-profiles-client.component';
import { InstructorProfilesClientComponent } from './instructor-profiles-client/instructor-profiles-client.component';
import { HomepageClientComponent } from './homepage-client/homepage-client.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: "registration", component: RegistrationComponent},
  { path: "login", component: LoginComponent},
  { path: "cottages", component: CottageProfilesClientComponent},
  { path: "boats", component: BoatProfilesClientComponent},
  { path: "instructors", component: InstructorProfilesClientComponent},
  { path: "home-client", component: HomepageClientComponent},
  { path: "client-profile", component: ClientProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppRoutingModule { }
