import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'webapp-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {

  constructor(public _router: Router) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

  onActivate(event: Event) {
    event.preventDefault;
    window.scroll(0,0);
  }
}
