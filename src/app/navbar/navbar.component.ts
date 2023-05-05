import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService } from '../event-card';
import { ISession } from '../shared/event.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];
  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {}

  isMarried = '8:00 am';
  title = 'Testers';

  handleSearchSessions(searchTerm: string) {
    console.log(searchTerm);

    // this.eventService
    //   .getSessionBySearch(searchTerm)
    //   .subscribe((session: ISession[]) => (this.foundSessions = session));
  }

  /* Interpolation & expressions
<h2> {{user.name}}</h2>
*/

  /* property binding & expressions
<img [src] ="user.imgUrl"/>
  */

  /* event binding & statements
<button (click) = "doSomething()">Click Me</button>
  */

  /* structural directives
They are prefixed with *, and they actually change the shape of the DOM; They either add or remove html elements from the dom, they don't just hide them!
e.g *ngFor
  */

  doSomething() {
    console.log('event binding');
  }
}
