import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  destroyed = new Subject<void>();
  currentScreenSize: string | undefined;

  displayNameMap = new Map([
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
  ]);
  linksLeft: any[] = [];
  linksRight: any[] = [];
  activeLink = -1;

  constructor(public _router: Router, private observer: BreakpointObserver) {
    this.observer
    .observe([
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for(const query of Object.keys(result.breakpoints)) {
        if(result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query);
        }
      }
    });
    this.linksLeft = [
      {
        label: 'About Us',
        link: '/web/page/about',
        index: 0
      },
      {
        label: 'Submit Your Story',
        link: '/web/page/submit-your-story',
        index: 1
      },
    ]

    this.linksRight = [
      {
        label: 'Meet The Winners',
        link: '/web/page/meet-the-winners',
        index: 2
      },
      {
        label: 'Contact Us',
        link: '/web/page/contact-us',
        index: 3
      },
    ]
  }

  ngOnInit(): void {
    this._router.events.subscribe(() => {
      this.activeLink = this.linksLeft.indexOf(this.linksLeft.find(tab => tab.link === '.' + this._router.url));
      this.activeLink = this.linksRight.indexOf(this.linksRight.find(tab => tab.link === '.' + this._router.url));
    });
    window.addEventListener('scroll', () => {
      navbarScroll();
    });
    
    window.addEventListener('load', (event) => {
      const inkBar = document.querySelector('mat-ink-bar');
      if (inkBar != null) {
        inkBar.id = 'mat-ink-bar';
        const inkElement = document.getElementById('mat-ink-bar');
        if (inkElement != null) {
          inkElement.style.visibility = "hidden";  
        }    
      }
    });

     function navbarScroll() {
      const header = document.getElementById('header');
      const logo = document.getElementById('logo');
      const menu = document.querySelectorAll('#menu');
      const section = document.querySelector('section');
      const y = window.scrollY;
      if (header != null && logo != null && section != null) {
        if (y > 10) {
          header.classList.add('small');
          logo.classList.add('small')
          menu.forEach((item)=> {
            item.classList.add('small');
          });
          section.classList.add('isScrolled');
        } else if (y < 10) {
          header.classList.remove('small');
          logo.classList.remove('small');
          menu.forEach((item)=> {
            item.classList.remove('small');
          });
          section.classList.remove('isScrolled');
        }
      }
    }
  }

  


}
