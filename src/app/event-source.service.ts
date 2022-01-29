import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
//ng g m about --route=about -m app-routing.module.ts
export class EventSourceService {

  constructor(private zone:NgZone) { }
  private getEventSource(url: string): EventSource {
    return new EventSource(url);
}

getServerSentEvent(url: string): Observable<MessageEvent> {
    return new Observable(observer => {
        const eventSource = this.getEventSource(url);

        eventSource.onmessage = event => {
            this.zone.run(() => observer.next(event));
            //observer.next(event)
        };
    });
}
}
