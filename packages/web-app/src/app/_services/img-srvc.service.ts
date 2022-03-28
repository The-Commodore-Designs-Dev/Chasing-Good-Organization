import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImgSrvcService {

  constructor() { }

  /**
   * getImageBaseUrl
   */
  public getImageBaseUrl(): string {
    if (environment.production) {
      return "dist/assets/";
    } else {
      return "http://localhost:8081/assets/";
    }
  }
}
