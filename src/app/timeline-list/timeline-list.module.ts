import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TimelineListComponent} from "./timeline-list.component";
import {TimelineTeaserComponent} from "./timeline-teaser/timeline-teaser.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimelineListComponent,
    TimelineTeaserComponent
  ],
  exports: [
    TimelineListComponent,
    TimelineTeaserComponent
  ]
})
export class TimelineListModule { }
