import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    window.location.reload();
  }
  
  onActivate(event: Event) {
    event.preventDefault;
    window.scroll(0,0);
  }
}
