import {Component} from '@angular/core';
import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core'
import {AngularFire, FirebaseListObservable, AngularFireDatabase} from 'angularfire2';

@Pipe({name: 'values', pure: true})
export class ValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    if (value) {
      return Object.keys(value).map((key) => {
        let newObj = value[key];
        newObj['key'] = key;
        return newObj;
      });
    }
  }
}

@Component({
  selector: 'login',
  template: `

    <form>

      <input type="text" [(ngModel)]="timeline_title" name="userInputTitle">
<input type="text" [(ngModel)]="timeline_description" name="userInputDescription">
<button (click)="addTimeline(timeline_title, timeline_description)">Add Timeline</button>
</form>

<div class="grid-item" *ngFor="let timeline of timelines | async">

<div class="timeline-title">
  {{timeline.title}} :: {{timeline.description}}

<button class="deleteTimelineButton" type="button" (click)="deleteTimeline(timeline)">Delete Timeline</button>
</div>

<form>

  <input type="text" [(ngModel)]="timeline.event_date" name="userInputDate + timeline.key" #eventDate="ngModel">
<input type="text" [(ngModel)]="timeline.event_description" name="userInputEvent" #eventDescription="ngModel">

<button class="addEventButton" type="button" (click)="addEvent(timeline)">Add Event</button>

<div class="event-title">Events:</div>

<div *ngFor="let datapoint of timeline.datapoints | values; let i = index">

<input type="text" [(ngModel)]="datapoint.time" name="datapointTime +{{i}}" >
<input type="text" [(ngModel)]="datapoint.event" name="datapointEvent +{{i}}" >
<button class="editEventButton" type="button" (click)="editEvent(timeline, datapoint)">Edit Event</button>
<button class="deleteEventButton" type="button" (click)="deleteEvent(timeline, datapoint)">Delete Event</button>

</div>

</form>

</div>
  
`
  ,
  styleUrls: ['./timeline-manager.component.scss'],
  providers: [AngularFire]
})


export class TimelineManagerComponent {
  private timelines: FirebaseListObservable<any[]>;

  private timeline_title = "";
  private timeline_description = "";

  constructor(private af: AngularFire) {

    try {
      this.timelines = af.database.list('/timelines');

    } catch (e) {
      console.log('timelines could not be fetched' + e.toString());
    }

  }

  private addTimeline() {

    var timestamp = new Date().toISOString();

    this.timelines.push({
      created_date: timestamp, title: this.timeline_title, description: this.timeline_description,
      is_private: false
    });

    this.timeline_title = '';
    this.timeline_description = '';

  }

  private addEvent(timeline: any) {


    console.log("timeline in addEvent: " + timeline.$key);

    let localTimeline: any = this.af.database.list('/timelines/' + timeline.$key + '/datapoints');

    localTimeline.push({
      "time": timeline.event_date,
      "event": timeline.event_description
    });
  }


  private editEvent(timeline: any, datapoint: any) {

    var db = firebase.database();
    var ref = db.ref('/timelines/' + timeline.$key + '/datapoints');


    var datapointRef = ref.child(datapoint.key);

    datapointRef.set({
      time: datapoint.time,
      event: datapoint.event
    });

  }

  private deleteEvent(timeline: any, datapoint: any) {

    var db = firebase.database();
    var ref = db.ref('/timelines/' + timeline.$key + '/datapoints');


    var datapointRef = ref.child(datapoint.key);

    datapointRef.remove();

  }

  private deleteTimeline(timeline: any) {

    var db = firebase.database();
    var ref = db.ref('/timelines/');


    var timelineRef = ref.child(timeline.$key);

    timelineRef.remove();

  }


}
