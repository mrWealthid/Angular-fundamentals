import { Injectable } from '@angular/core';
import { IUser } from './user.model';

type GetUserParams = {
  userName: string;
  password: string;
};
@Injectable()
export class AuthService {
  currentUser!: IUser;

  loginUser({ userName, password }: GetUserParams) {
    this.currentUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Papa',
    };
  }

  isAuthenticated() {
    if (!this.currentUser) return;
    console.log(this.currentUser);

    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}

/*Side Note;
when a service is registered a provider in the app module; it is shared to all other modules within the app; Making it accessible through out the app
, but when it is a declaration or an import it's not so; because it is made available only withing the module it's imported!





*/
