import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineRouting} from "./timeline.routing";
import {TimelineComponent} from "./timeline.component";

@NgModule({
  imports: [
    CommonModule,
    TimelineRouting
  ],
  declarations: [ TimelineComponent ],
  exports: [ TimelineComponent ]
})
export class TimelineModule { }
