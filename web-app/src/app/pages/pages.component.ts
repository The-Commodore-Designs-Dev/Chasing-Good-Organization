import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

  onActivate(event: Event) {
    event.preventDefault;
    window.scroll(0,0);
  }
}
