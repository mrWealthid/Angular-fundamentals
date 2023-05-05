import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event-card/shared/event.service';
import { IEvent, ISession } from '../shared/event.model';

//we didn't define a selector because the component won't be used in another component as a child component
@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event?: IEvent;
  isShown: boolean = true;
  filterBy: string = 'all';
  sortBy: string = 'votes';


  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.eventService.getEventById(
      +this.route.snapshot.params['id']
    );
  }

  handleFilter(val: string) {
    this.filterBy = val;
    // this.event =
  }

  handleParent(event: any) {
    console.log('I bubbled up to parent', event);
  }

  toggleView() {
    this.isShown = !this.isShown;
  }

  handleSaveSessions(session: ISession) {
    session.id = Date.now();
    this.event?.sessions.push(session);
    this.eventService.saveSession(this.event);
    console.log('I bubbled form values up to parent ==>', session);
    this.isShown = true;
  }
}
