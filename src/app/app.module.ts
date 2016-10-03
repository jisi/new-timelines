import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AngularFireModule, AuthMethods} from 'angularfire2/angularfire2';
import {routing, appRoutingProviders} from './app.routing';
import {AppComponent} from './app.component';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {TimelineManagerComponent} from "./timeline-manager/timeline-manager.component";
import {LoginComponent} from "./login/login.component";
import {LoginStatusComponent} from "./login-status/login-status.component";
import {LoginGuardService} from "./login-guard.service";
import {UserService} from './user.service';


var firebaseConfig = {
  apiKey: "AIzaSyA6THjic5wZMGInGdlmHeAYG80fB8RoM3s",
  authDomain: "timelines-c2d38.firebaseapp.com",
  databaseURL: "https://timelines-c2d38.firebaseio.com",
  storageBucket: "timelines-c2d38.appspot.com",
};

var firebaseAuthConfig = {
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    LoginStatusComponent,
    TimelineManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [appRoutingProviders, LoginGuardService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
