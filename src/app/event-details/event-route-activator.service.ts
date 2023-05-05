import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../event-card/shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    /*
    With the router you can get the exact event
    const eventExists = !!this.eventService.getEventById(+route.params['id']);

    we use the symbol (!!) to return a boolean -- it works with js too!
    */
    const eventExists = !!this.eventService.getEventById(+route.params['id']);
    console.log(eventExists);

    if (!eventExists) this.router.navigate(['/404']);

    return eventExists;
  }
}
