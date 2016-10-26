import {Component} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {OnInit} from '@angular/core';
import {TimelinesService} from "../../shared/model/timelines.service";
import {Timeline} from "../../shared/model/timeline";

@Component({
  selector: 'timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.scss']
})

export class TimelineListComponent implements OnInit {

  timelines: Observable<Timeline[]>;

  constructor(private timelinesService: TimelinesService) { }

  ngOnInit() {
    this.timelines = this.timelinesService.getNewestTimelines(6);
  }
}
