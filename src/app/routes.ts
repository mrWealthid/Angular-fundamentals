import { Routes } from '@angular/router';
import { Error404Component } from './errors/404 component';
import { EditEventComponent } from './event-card/edit-event.component';

import { CreateEventComponent } from './event-card/index';
import { CreateSessionComponent } from './event-details/create-session.component';
import {
  EventDetailsComponent,
  EventRouteActivator,
} from './event-details/index';

import { EventListResolver, EventsListComponent } from './events-list/index';

export const appRoutes: Routes = [
  //using a function for the can deactivate route
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },

  {
    path: 'events/session/new',
    component: CreateSessionComponent,
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  { path: '404', component: Error404Component },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    //using a service for canActivate route
    canActivate: [EventRouteActivator],
  },

  {
    path: 'editevents/:id',
    component: EditEventComponent,
    //using a service for canActivate route
  },

  //default path
  { path: '', redirectTo: '/events', pathMatch: 'full' },

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
