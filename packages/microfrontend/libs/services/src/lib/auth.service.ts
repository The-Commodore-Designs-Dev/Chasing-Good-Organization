/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { shareReplay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }

  login(email: string, password: string) {
    return this.http.post<Body>('/auth', {email, password}).pipe(
      shareReplay()
    )
  }

  private setSession(authResult: { expiresIn: moment.DurationInputArg1; idToken: string; }) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  /**
   * isLoggedIn
   */
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at") || 'null';
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt)
  }
}
