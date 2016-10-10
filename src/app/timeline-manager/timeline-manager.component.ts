import {Component} from '@angular/core';
import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core'
import {AngularFire, FirebaseListObservable, AngularFireDatabase} from 'angularfire2';
import {NgModule} from '@angular/core';

//import {AppModule} from '.app.module';

@Pipe({name: 'values', pure: true})
export class ValuesPipe implements PipeTransform {
  transform(value:any, args:any[] = null):any {
    if (value) {

      let list = [];

      for (let key of Object.keys(value)) {
        let o = value[key];
        o['key'] = key;
        list.push(o)
      }
      return list;
    }
  }
}

/*@Component({
 selector: 'home',
 templateUrl: '/home.component.html',
 providers: [AngularFire]

 })*/

//directives: [NgGrid, NgGridItem],
//pipes: [ValuesPipe],

@Component({
  selector: 'login',
  templateUrl: './timeline-manager.component.html',
  styleUrls: ['./timeline-manager.component.scss'],
  providers: [AngularFire]
})


export class TimelineManagerComponent {
  private timelines:FirebaseListObservable<any[]>;

  private timeline_title = "";
  private timeline_description = "";

  constructor(private af:AngularFire) {

    try {
      this.timelines = af.database.list('/timelines');

    }catch(e){
      console.log('timelines could not be fetched'+e.toString());
    }

  }

  private addTimeline() {

    var timestamp = new Date().toISOString();

    this.timelines.push({
      created_date: timestamp, title: this.timeline_title, description: this.timeline_description,
      is_private: false
    });

    this.timeline_title = '';
    this.timeline_description ='';

  }

  private addEvent(timeline:any) {


    console.log("timeline in addEvent: "+ timeline.$key);

    let localTimeline:any = this.af.database.list('/timelines/' + timeline.$key + '/datapoints');

    localTimeline.push({
      "time": timeline.event_date,
      "event": timeline.event_description
    });
  }


  private editEvent(timeline:any, datapoint:any) {

    var db = firebase.database();
    var ref = db.ref('/timelines/' + timeline.$key + '/datapoints');


    var datapointRef = ref.child(datapoint.key);

    datapointRef.set({
      time: datapoint.time,
      event: datapoint.event
    });

  }


}
