import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineRouting} from "./timeline.routing";
import {TimelineComponent} from "./timeline.component";
import {TimelineListComponent} from "./timeline-list/timeline-list.component";
import {TimelineTeaserComponent} from "./timeline-teaser/timeline-teaser.component";
import {TimelineDetailComponent} from "./timeline-detail/timeline-detail.component";

@NgModule({
  imports: [
    CommonModule,
    TimelineRouting
  ],
  declarations: [
    TimelineComponent,
    TimelineDetailComponent,
    TimelineTeaserComponent,
    TimelineListComponent
  ],
  exports: [
    TimelineComponent,
    TimelineDetailComponent,
    TimelineTeaserComponent,
    TimelineListComponent
  ]
})
export class TimelineModule { }
