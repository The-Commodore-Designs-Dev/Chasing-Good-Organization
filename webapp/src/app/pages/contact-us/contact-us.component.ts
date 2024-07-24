import { Component, OnInit } from '@angular/core';
import { WordpressApiService } from 'src/app/_services/wordpress-api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  backendPage: any;
  constructor(private wordpress: WordpressApiService) { }

  ngOnInit(): void {
    this.getPage();
  }

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

    console.log(document.querySelectorAll('h2.wp-block-heading.alignwide.has-base-color.has-text-color.has-link-color.wp-elements-c9b5699bdecff18878afa112249018b5'));
    const el = document.querySelectorAll('h2.wp-block-heading.alignwide.has-base-color.has-text-color.has-link-color.wp-elements-c9b5699bdecff18878afa112249018b5');
    for (let index = 0; index < el.length; index++) {
      (el[index] as HTMLElement).style.minHeight = "100px;";
      (el[index] as HTMLElement).style.letterSpacing = "-0.02em;";
    }

    console.log(document.querySelectorAll('.is-nowrap.is-layout-flex'));
    const eli = document.querySelectorAll('.is-nowrap.is-layout-flex');
    for (let index = 0; index < eli.length; index++) {
      (eli[index] as HTMLElement).style.flexDirection = "column";
      (eli[index] as HTMLElement).style.flexWrap = "nowrap";
    }
  }

  getPage() {
    this.wordpress.getSinglePage(14).subscribe(
      (data) => {
        this.backendPage = data;
      }
    )
  }
}
