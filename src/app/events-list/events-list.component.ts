import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event-card/shared/event.service';
import { eventInterface } from '../model/model';
import { IEvent } from '../shared/event.model';

@Component({
  // selector: 'app-events-list',since we are routing to it directly
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events: IEvent[] = [];
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  // ngOnInit(): void {

  //   //We just pulled out data directly when it was synchronous
  //   // this.events = this.eventService.getEvents();

  //I USED THIS IMPLEMENTATION WHEN I FETCHED MY DAT ASYNC BUT I DIDN'T RESOLVE DATA BEFORE MOUNTING COMPONENT, WHICH ISN'T TO GOOD
  //   //Here we modeled our response like an async process using observable, hence we use the word subscribe on it
  //   this.events = this.eventService
  //     .getEvents()
  //     .subscribe((event: any = []) => (this.events = event));
  // }

  ngOnInit(): void {
    //Here we resolve before we mount the component

    //Note the name ['events'] must match the property name on the route objects where resolve is used!
    this.events = this.route.snapshot.data['events'];
  }

  someProperty: any = 'Wealth';

  isMarried = true;

  EventBubbled(event: eventInterface) {
    console.log('event bubbled to the parent', event);
  }
}
