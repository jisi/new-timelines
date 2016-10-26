import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineRouting} from "./timeline.routing";
import {TimelineComponent} from "./timeline.component";
import {TimelineListComponent} from "./timeline-list/timeline-list.component";
import {TimelineTeaserComponent} from "./timeline-teaser/timeline-teaser.component";
import {TimelineDetailComponent} from "./timeline-detail/timeline-detail.component";
import {TimelineOverviewComponent} from "./timeline-overview/timeline-overview.component";

@NgModule({
  imports: [
    CommonModule,
    TimelineRouting
  ],
  declarations: [
    TimelineComponent,
    TimelineDetailComponent,
    TimelineListComponent,
    TimelineOverviewComponent,
    TimelineTeaserComponent
  ],
  exports: [
    TimelineComponent,
    TimelineDetailComponent,
    TimelineListComponent,
    TimelineOverviewComponent,
    TimelineTeaserComponent
  ]
})
export class TimelineModule { }
