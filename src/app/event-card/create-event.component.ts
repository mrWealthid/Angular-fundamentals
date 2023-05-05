import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';
import { EventService } from './shared/event.service';

@Component({
  //   selector: 'create-event',
  templateUrl: './create-event.component.html',

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
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;

  newEvent: any;

  constructor(private router: Router, private eventService: EventService) {}
  cancel() {
    this.router.navigate(['/events']);
  }

  ngOnInit(): void {
    // this.newEvent ={
    // }
  }

  saveEvent(formValues: any) {
    console.log(formValues);
    this.eventService.addEvent(formValues);
    this.isDirty = false;

    this.router.navigate(['/events']);
  }
}
