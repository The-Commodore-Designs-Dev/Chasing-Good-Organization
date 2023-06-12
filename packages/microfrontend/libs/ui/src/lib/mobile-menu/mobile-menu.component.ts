import { Component, OnInit, Input } from '@angular/core';
import { MatTabNavPanel } from '@angular/material/tabs';
import { NavigationEnd, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ui-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  isDisplayed = false;
  links: any[] = [];
  activeLink = -1;
  faBars = faBars;
  @Input()
  disablePagination!: boolean;
  @Input()
  active!: boolean;
  tabPanel: MatTabNavPanel|undefined;

  constructor(public _router: Router) {  
    this.links = [
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
      this.activeLink = this.links.indexOf(this.links.find(tab => tab.link === '.' + this._router.url));
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

  }
    
  toggleMenu() {
      const menu = document.getElementById('menu');
      const tabLinks = document.querySelector('.mat-mdc-tab-links');
      if (tabLinks != null) {
        tabLinks.id = 'mat-tab-links';
      }
      const element = document.getElementById('mat-tab-links');
      if (menu != null && element != null) {
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

  navigateMobile() {
    const menu = document.getElementById('menu');
    if (menu != null) {
      menu.classList.remove('show');
      menu.classList.add('hide');      
    }
  }
}

