import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RocketComponent } from './rocket/rocket.component';
import { LaunchComponent } from './launch/launch.component';
import { LaunchlistComponent } from './launchlist/launchlist.component';
import { LaunchupdateComponent } from './launchupdate/launchupdate.component';
import { RocketlistComponent } from './rocketlist/rocketlist.component';
import { RocketupdateComponent } from './rocketupdate/rocketupdate.component';

const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "rocket", component: RocketComponent},
  {path: "rocket-list", component: RocketlistComponent},
  {path: "rocket-update/:id", component: RocketupdateComponent},
  {path: "launch", component: LaunchComponent},
  {path: "launch-list", component: LaunchlistComponent},
  {path: "launch-update/:id", component: LaunchupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
