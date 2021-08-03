import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { 
   
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
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
      }
    }
  }

  


}
