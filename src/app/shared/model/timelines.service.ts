import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {AngularFireDatabase} from "angularfire2/angularfire2";
import {Timeline} from "./timeline";
import {Event} from "./event";

@Injectable()
export class TimelinesService {

  constructor(private db: AngularFireDatabase) { }


  getTimelineByKey(key: string): Observable<Timeline> {
    return this.db.object('/timelines/'+key)
      .map(result => Timeline.fromJson(result));
  }

  getEventsForTimeline(key: string): Observable<Event[]> {
    let eventKeys = this.db.list('eventsPerTimeline/'+key)

    let timelineEvents = eventKeys
      .map(ept => ept.map( event => this.db.object('/events/'+ event.$key)))
      .concatMap(fbObjObs => Observable.combineLatest(fbObjObs)).do(console.log);

    return timelineEvents;
  }

  getNewestTimelines(count = 10): Observable<Timeline[]> {
    return this.db.list('/timelines', {
      query: {
        limitToLast: count,
        orderByChild: 'created_date'
      }
    });
  }

}
