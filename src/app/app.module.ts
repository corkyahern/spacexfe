import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { Authinterceptor } from './authinterceptor';
import { RocketComponent } from './rocket/rocket.component';
import { LaunchComponent } from './launch/launch.component';
import { LaunchlistComponent } from './launchlist/launchlist.component';
import { LaunchupdateComponent } from './launchupdate/launchupdate.component';
import { RocketlistComponent } from './rocketlist/rocketlist.component';
import { RocketupdateComponent } from './rocketupdate/rocketupdate.component';
import { MenuComponent } from './menu/menu.component';
import { SortDirective } from './sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    RocketComponent,
    LaunchComponent,
    LaunchlistComponent,
    LaunchupdateComponent,
    RocketlistComponent,
    RocketupdateComponent,
    MenuComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Authinterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
