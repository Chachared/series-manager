import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  /**
   * try to log the user
   * @param email
   * @param password
   */
  signIn(login: string, password: string): Promise<void> {
    return new Promise<void>((res, rej) => {
      if (login === 'Administrateur' && password === 'azerty') {
        this.token.next('hohronhonhq');
        res();
      } else {
        rej('Les identifiants sont incorrects');
      }
    });
  }

  signOut(): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.token.next('');
      res();
    });
  }
}
