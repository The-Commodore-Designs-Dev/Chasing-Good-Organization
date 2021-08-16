import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: any[] = [];
  activeLink = -1;
  constructor(public _router: Router) { 
    this.links = [
      {
        label: 'About',
        link: '/pages/about',
        index: 0
      },
      {
        label: 'Submit Your Story',
        link: '/pages/submit-your-story',
        index: 1
      },
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
      this.activeLink = this.links.indexOf(this.links.find(tab => tab.link === '.' + this._router.url));
    });
    /*window.addEventListener('scroll', () => {
      navbarScroll();
    })
     function navbarScroll() {
      var y = window.scrollY;
      if (y > 10) {
        var header = document.getElementsByClassName('header')[0];
        var headerWrap = document.getElementsByClassName('header-wrap')[0];
        var logo = document.getElementsByClassName('logo')[0];
        var menu = document.getElementsByClassName('menu')[0];
        headerWrap.classList.remove('height-full');
        headerWrap.classList.add('height-auto');
        header.classList.add('small');
        logo.classList.add('small');
        logo.classList.remove('center');
        logo.classList.add('left');
        menu.classList.add('display');
        menu.classList.remove('no-display');
      } else if (y < 10) {
        var header = document.getElementsByClassName('header')[0];
        var headerWrap = document.getElementsByClassName('header-wrap')[0];
        var logo = document.getElementsByClassName('logo')[0];
        var menu = document.getElementsByClassName('menu')[0];
        headerWrap.classList.add('height-full');
        headerWrap.classList.remove('height-auto');
        header.classList.remove('small');
        logo.classList.remove('small');
        logo.classList.remove('left');        
        logo.classList.add('center');
        menu.classList.remove('display');
        menu.classList.add('no-display');
      }
    } */
  }

  


}
