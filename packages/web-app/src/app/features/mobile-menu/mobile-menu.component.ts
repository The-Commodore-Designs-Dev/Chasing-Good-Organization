import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})

export class MobileMenuComponent implements OnInit {
  isDisplayed = false;
  links: any[] = [];
  activeLink = -1;
  faBars = faBars;
  @Input()
  disablePagination: boolean
  @Input()
  active: boolean

  constructor(public _router: Router) {  
    this.links = [
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
      window.location.reload();
      this.activeLink = this.links.indexOf(this.links.find(tab => tab.link === '.' + this._router.url));
    });

    window.addEventListener('load', (event) => {
      var inkBar = document.querySelector('mat-ink-bar');
      inkBar.id = 'mat-ink-bar';
      var inkElement = document.getElementById('mat-ink-bar');
      inkElement.style.visibility = "hidden";
    });

  }
    
  toggleMenu() {
      var menu = document.getElementById('menu');
      var tabLinks = document.querySelector('.mat-tab-links');
      tabLinks.id = 'mat-tab-links';
      var element = document.getElementById('mat-tab-links');
      
      if(this.isDisplayed == false) {
        menu.classList.add('show');
        menu.classList.remove('hide');
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.background = "#1b205e";
        element.style.width = "100%";
        element.style.transition = "background 0.5s ease";
        
        this.isDisplayed = !this.isDisplayed;
      } else {
        menu.classList.remove('show');
        menu.classList.add('hide');
        element.style.display = "";
        element.style.flexDirection = "";
        element.style.background = "";
        element.style.width = "";
        element.style.transition = "background 0.5s ease";

        this.isDisplayed = !this.isDisplayed;
      }
      
      
  }
}
