import { Component, OnInit } from '@angular/core';
import { EventService } from './event-card/shared/event.service';
import { eventInterface } from './model/model';
import { ToastService } from './shared/toast.service';

declare let toastr: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // event = {
  //   name: 'Wedding',
  //   venue: 'USA',
  //   fee: 100,
  //   badge: 'Important',
  //   time: '10:00am',
  // };

  events: any;

  // eventService;
  // constructor() {
  //   this.eventService = new EventService();
  // }

  constructor(
    private eventService: EventService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    //we put async data fetching here not in the constructor
    // this.events = this.eventService.getEvents();
  }
}
