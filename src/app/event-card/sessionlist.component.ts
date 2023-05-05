import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ISession } from '../shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: './sessionlist.component.html',
})
export class SessionListComponent implements OnChanges {
  //passing from parent to child
  @Input()
  sessions: ISession[] | undefined;

  @Input()
  filterBy: string;

  @Input()
  sortBy: string;
  visibleSession?: ISession[] = [];

  //   sortSessions(val: any) {
  //  this.visibleSession = this.sessions?.sort((a:string, b:string)=>  a.name>b.name )
  //       this.visibleSession = this.sessions?.slice(0);
  //     } else {
  //       this.visibleSession = this.sessions?.filter((item) =>
  //         item.level.toLowerCase().includes(val)
  //       );
  //       // console.log(val);
  //     }
  //   }

  filterSessions(val: any) {
    if (this.filterBy === 'all') {
      this.visibleSession = this.sessions?.slice(0);
    } else {
      this.visibleSession = this.sessions?.filter((item) =>
        item.level.toLowerCase().includes(val)
      );
      // console.log(val);
    }
  }

  ngOnChanges(): void {
    if (!this.sessions) return;
    this.filterSessions(this.filterBy);
    this.sortBy === 'name'
      ? this.visibleSession?.sort(sortByNameAsc)
      : this.visibleSession?.sort(sortByVotesDesc);
  }

  //passing from child to parent
  @Output()
  eventBubbled = new EventEmitter();

  handleClick() {
    this.eventBubbled.emit('Wealth');
  }
}
function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}
function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
