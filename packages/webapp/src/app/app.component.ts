import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterState, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

declare const gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Chasing Good';
  loadingDataImg: boolean = false;

  constructor(public _router: Router, private activatedRoute: ActivatedRoute,
    private titleService: Title) {
      _router.events.subscribe(event => {
        this.navigationInterceptor(event);
      })
  
      /** START : Code to Track Page View using gtag.js */
      this._router.events.pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects
        })
      })
      /** END : Code to Track Page View  using gtag.js */  
  
      //Add dynamic title for selected pages - Start
      _router.events.subscribe(event => {
        if(event instanceof NavigationEnd) {
            var title = this.getTitle(_router.routerState, _router.routerState.root).join(' > ');
            titleService.setTitle(title);
          }
        });
      //Add dynamic title for selected pages - End
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
  
  onActivate(event: any) {
    event.preventDefault;
    window.scroll(0,0);
  }

  // collect that title data properties from all child routes
  // there might be a better way but this works for now
  getTitle(state: RouterState, parent: ActivatedRoute):any {
    state = this._router.routerState;
    parent = state.root;
    const child = parent.firstChild;
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, child));
    }

    return data;
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: any): void {

    //Triggered When the navigation starts
      if (event instanceof NavigationStart) {
        this.loadingDataImg = true;
      }
    //Triggered When the navigation ends
      if (event instanceof NavigationEnd) {
        this.loadingDataImg = false;
      }
  
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        this.loadingDataImg = false;
      }
    //Triggered When the error occurrs while navigation
      if (event instanceof NavigationError) {
        this.loadingDataImg = false;
      }
    }
}

