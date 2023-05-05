import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
  EventCardComponent,
  EventService,
  CreateEventComponent,
} from './event-card/index';
import {
  EventDetailsComponent,
  EventRouteActivator,
} from './event-details/index';
import { EventListResolver, EventsListComponent } from './events-list/index';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastService } from './shared/toast.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404 component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEventComponent } from './event-card/edit-event.component';
import { CreateSessionComponent } from './event-details/create-session.component';
import { SessionListComponent } from './event-card/sessionlist.component';
import { CollapsableComponent } from './shared/collapsable.component';
import { DurationPipe } from './shared/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConvertToSpacesPipe,
    EventsListComponent,
    EventCardComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    EditEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableComponent,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventService,
    ToastService,
    EventRouteActivator,
    EventListResolver,
    AuthService,

    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
/*When adding a service we just add the name to the providers, but when we are using a function it is done differently ===>

This is the long hand form, 
 note: that the short hand form is best in the places where we are using services,
 and the long hand form is best for functions
  providers: [{provide :EventService, useValue: EventService},
  ],

*/

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm(
      'You have not saved this event, do you really want to cancel ?'
    );

  return true;
}
