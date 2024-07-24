import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(public _router: Router) { }

  ngAfterViewInit() {
    console.log(document.querySelectorAll('.alignfull'));
    const els = document.querySelectorAll('.alignfull');
    for (let index = 0; index < els.length; index++) {
      (els[index] as HTMLElement).style.marginTop = "0";
      (els[index] as HTMLElement).style.marginBottom = "0";
      (els[index] as HTMLElement).style.paddingTop = "var(--wp--preset--spacing--50)";
      (els[index] as HTMLElement).style.paddingRight = "var(--wp--preset--spacing--50)";
      (els[index] as HTMLElement).style.paddingBottom = "var(--wp--preset--spacing--50)";
      (els[index] as HTMLElement).style.paddingLeft = "var(--wp--preset--spacing--50)";
    }

    console.log(document.querySelectorAll('.alignwide'));
    const el = document.querySelectorAll('.alignwide');
    for (let index = 0; index < el.length; index++) {
      (el[index] as HTMLElement).style.minHeight = "100px;";
      (el[index] as HTMLElement).style.fontSize = "clamp(4.509rem, 4.509rem + ((1vw - 0.2rem) * 9.152), 10rem)";
      (el[index] as HTMLElement).style.letterSpacing = "-0.02em;";
    }
  }

  ngOnInit(): void {
  }

  onActivate(event: Event) {
    event.preventDefault;
    window.scroll(0,0);
  }
}
