import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
/*     window.addEventListener("scroll", () => {
      firstSectionScroll();
    });

    function firstSectionScroll() {
      var y = window.screenY;
      if (y > 10) {
        var section = document.getElementsByClassName('about-section')[0];
        section.classList.add('');
      } else if (y < 10) {
        var section = document.getElementsByClassName('about-section')[0];
      }
    } */
  }

}
