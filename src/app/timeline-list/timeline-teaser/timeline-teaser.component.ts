import { Component, Input } from '@angular/core';

@Component({
  selector: 'timeline-teaser',
  templateUrl: './timeline-teaser.component.html',
  styleUrls: ['./timeline-teaser.component.scss']
})
export class TimelineTeaserComponent {
  @Input('title') title: string;
  @Input('description') description: string;
}
