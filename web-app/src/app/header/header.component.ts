import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  destroyed = new Subject<void>();
  currentScreenSize: string;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  linksLeft: any[] = [];
  linksRight: any[] = [];
  activeLink = -1;

  constructor(public _router: Router, breakpointObserver: BreakpointObserver) {
    this.linksLeft = [
      {
        label: 'About Us',
        link: '/pages/about',
        index: 0
      },
      {
        label: 'Submit Your Story',
        link: '/pages/submit-your-story',
        index: 1
      },
    ]

    this.linksRight = [
      {
        label: 'Meet Some Nominees',
        link: '/pages/meet-some-nominees',
        index: 2
      },
      {
        label: 'Contact Us',
        link: '/pages/contact-us',
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
    })
     function navbarScroll() {
      var header = document.getElementById('header');
      var logo = document.getElementById('logo');
      var menu = document.querySelectorAll('#menu');
      var section = document.querySelector('section');
      var y = window.scrollY;
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
