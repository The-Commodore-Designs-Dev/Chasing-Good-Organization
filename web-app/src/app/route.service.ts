import { Injectable } from '@angular/core';
import { Router, Routes, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private applicationInitialRoutes: Routes;
  constructor(private router: Router, private viewPortScroller: ViewportScroller) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.viewPortScroller.scrollToPosition([0, 0]));
  }
}
