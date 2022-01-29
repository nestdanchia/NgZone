import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import { EventSourceService } from '../event-source.service';
import { mergeMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
// https://malcoded.com/posts/angular-backend-express/
// ng serve --proxy-config proxy.config.json
// https://levelup.gitconnected.com/simple-application-with-angular-6-node-js-express-2873304fff0f

export class EventComponent implements OnInit {
  evs!:EventSource;private subj=new BehaviorSubject([]);
url='http://localhost:8888';
data=[0];
data$!:Observable<any>;
  constructor(private eventSourceService:EventSourceService) { }

  ngOnInit(): void {
    
   //this.eventSourceService.getServerSentEvent('http://localhost:8888/countdown').subscribe(data => {this.data=[...data.data,data],console.log(this.data)});
   this.eventSourceService.getServerSentEvent('http://localhost:8888/status').subscribe(data => console.log('data events',data));
   this.eventSourceService.getServerSentEvent('http://localhost:8888/events').subscribe(data => console.log('data events',data));
  
/*
 It creates a new inner observable for every value it receives from the Source.

*/
//https://angular.io/start/start-data
/*
  this.data$ = timer( 0, 1000 ) //  observable que emite un valor cada cierto tiempo
    .pipe( 
      mergeMap( val =>{ 
        console.log('Source value '+val)
        console.log('starting new observable')
      
      // El operador mergeMap permite emitir al innerObservable producido por getServerSentEvent()
    return this.eventSourceService.getServerSentEvent('http://localhost:8888/countdown')
      })
      
      )
      */
      let srcObservable= of(1,2,3,4)
let innerObservable= of('A','B','C','D')
 
srcObservable.pipe(
  mergeMap( val => {
    console.log('Source value '+val)
    console.log('starting new observable')
    return innerObservable
  })
)
.subscribe(ret=> {
  console.log('Recd ' + ret);
})

}
eturnAsObservable()
{
return this.subj.asObservable();
}
GetExchangeData()
{
let subject=this.subj;
if(typeof(EventSource) !=='undefined')
{
this.evs=new EventSource('//localhost:8080/getStockUpdate');
this.evs.onopen=function(e)
{
console.log("Opening connection.Ready State is "+this.readyState);
}
this.evs.onmessage=function(e)
{
console.log("Message Received.Ready State is "+this.readyState);
subject.next(JSON.parse(e.data));
}
this.evs.addEventListener("timestamp",function(e:any)
{
//console.log("Timestamp event Received.Ready State is "+this.readyState);
subject.next(e["data"]);
})
this.evs.onerror=function(e)
{
console.log(e);
if(this.readyState==0)
{
console.log("Reconnecting…");
}
}
}
}stopExchangeUpdates()
{
this.evs.close();
}
}


