import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  destroyed = new Subject<void>();
  currentScreenSize: string;

  displayNameMap = new Map([
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
  ]);

  constructor(public _router: Router, private observer: BreakpointObserver) { 
    this.observer
    .observe([
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for(const query of Object.keys(result.breakpoints)) {
        if(result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
