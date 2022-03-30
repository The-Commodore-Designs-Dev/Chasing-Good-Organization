import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlSrvcService {

  constructor() { }

  /**
   * getBaseUrl
   */
  public getBaseUrl(): string {
    if (environment.production) {
      return "";
    } else {
      return "https://localhost:8080/";
    }
  }
}
