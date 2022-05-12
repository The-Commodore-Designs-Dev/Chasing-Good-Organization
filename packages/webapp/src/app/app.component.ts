import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Chasing Good';

  constructor(public _router: Router) {

  }

  ngOnInit() {
    this.setUpAnalytics();
  }
  
  onActivate(event: Event) {
    event.preventDefault;
    window.scroll(0,0);
  }

  setUpAnalytics() {
    this._router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        gtag('config', 'G-0VX8TXQQPC', 
          {
            page_path: event.urlAfterRedirects
          }
        )
      })
  }
}

