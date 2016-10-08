import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
import {AuthMethods, AngularFireModule} from "angularfire2";

//own modules and components
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {TimelineListModule} from "./timeline-list/timeline-list.module";
import {TimelineManagerComponent} from "./timeline-manager/timeline-manager.component";

//pipes
import {ValuesPipe} from './timeline-manager/timeline-manager.component';

//directives
import {MDLUpdateElementDirective} from "./shared/mdl-update-elements.directive";


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
    AboutComponent,
    AppComponent,
    HomeComponent,
    MDLUpdateElementDirective,
    TimelineManagerComponent,
    ValuesPipe
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    TimelineListModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule {
}
