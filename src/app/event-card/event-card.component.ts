import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { eventInterface } from '../model/model';
import { IEvent } from '../shared/event.model';
import { ToastService } from '../shared/toast.service';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent implements OnInit {
  ngOnInit(): void {}

  @Input()
  event!: IEvent;

  @Input()
  some: any;

  @Output()
  eventBubbled = new EventEmitter();

  someProperty: any = 'Wealth';

  constructor(private toast: ToastService) {}

  isMarried = true;
  handleClick() {
    console.log('button was clicked');
    this.eventBubbled.emit(this.event);
  }

  logFoo(event: eventInterface) {
    console.log('foo', this.event);
  }

  handleToggle() {
    this.isMarried = !this.isMarried;
  }

  showToast(event: any) {
    // console.log('show toast', event, event.time);
    this.toast.handleSuccess(event.name, event.time);
  }
  /*using the ngClass binding you can return 
1.string
2.An Array
3. An Object

*/

  // checkClass() {
  //   if (this.event && this.event.time === '8:00 am') return 'first';

  //   return '';
  // }

  checkClass() {
    if (this.event && this.event.time === '8:00 am') return ['first', 'bold'];
    return [];
  }
  // checkClass() {
  //   const isEarly = this.event && this.event.time === '8:00 am';
  //   return { first: isEarly };
  // }

  checkStyles() {
    if (this.event && this.event.time === '8:00 am')
      return { color: 'brown', 'font-weight': 'bold' };
    return {};
  }
}
