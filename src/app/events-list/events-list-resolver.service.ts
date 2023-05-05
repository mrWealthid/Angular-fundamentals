import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveStart,
  RouterStateSnapshot,
} from '@angular/router';
import { map } from 'rxjs';
import { EventService } from '../event-card/shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve() {
    return this.eventService.getEvents().pipe(map((event) => event));
  }
}
