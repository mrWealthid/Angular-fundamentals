import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { AuthService } from '../user/auth.service';
import { EventService } from './shared/event.service';

@Component({
  templateUrl: './edit-event.component.html',

  styles: [
    `
      em {
        float: right;
        padding-left: 10px;
        color: red;
      }

      .error input {
        background-color: #e3c3c5;
      }

      .error ::-webkit-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class EditEventComponent implements OnInit {
  //   isDirty: boolean = true;

  newEvent: any;

  constructor(
    private router: Router,
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}
  cancel() {
    this.router.navigate(['/events']);
  }

  ngOnInit(): void {
    // this.newEvent = {
    //   id: 1,
    //   name: 'Angular Connect',
    //   date: new Date('9/26/2036'),
    //   time: '10:00 am',
    //   price: 599.99,
    //   // On: true,
    //   imageUrl: '/assets/images/angularconnect-shield.png',
    //   location: {
    //     address: '1057 DT',
    //     city: 'London',
    //     country: 'England',
    //   },
    //   sessions: [],
    // };

    this.newEvent = this.eventService.getEventById(
      +this.route.snapshot.params['id']
    );
  }
  // saveEvent(formValues: any) {
  //   console.log(formValues);
  //   this.eventService.addEvent(formValues);

  //   this.router.navigate(['/events']);
  // }

  updateEvent(formValues: any) {
    console.log(formValues);

    this.eventService.editEvent(+this.route.snapshot.params['id'], formValues);

    this.router.navigate(['/events']);
  }
}
