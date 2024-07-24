import { Component, OnInit, Input } from '@angular/core';
import { WordpressApiService } from 'src/app/_services/wordpress-api.service';

@Component({
  selector: 'app-submit-your-story',
  templateUrl: './submit-your-story.component.html',
  styleUrls: ['./submit-your-story.component.scss']
})
export class SubmitYourStoryComponent implements OnInit {
  backendPage: any;


  constructor(private wordpress: WordpressApiService) {

   }

   ngAfterViewInit() {
/*     const els = document.querySelectorAll('.alignfull');
    for (let index = 0; index < els.length; index++) {
      (els[index] as HTMLElement).style.marginTop = "0";
      (els[index] as HTMLElement).style.marginBottom = "0";
      (els[index] as HTMLElement).style.paddingTop = "var(--wp--preset--spacing--50)";
      (els[index] as HTMLElement).style.paddingRight = "var(--wp--preset--spacing--50)";
      (els[index] as HTMLElement).style.paddingBottom = "var(--wp--preset--spacing--50)";
      (els[index] as HTMLElement).style.paddingLeft = "var(--wp--preset--spacing--50)";
    }

    const el = document.querySelectorAll('h2.wp-block-heading.alignwide.has-base-color.has-text-color.has-link-color.wp-elements-c9b5699bdecff18878afa112249018b5');
    for (let index = 0; index < el.length; index++) {
      (el[index] as HTMLElement).style.minHeight = "100px;";
      (el[index] as HTMLElement).style.letterSpacing = "-0.02em;";
    } */
  }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.wordpress.getSinglePage(59).subscribe(
      (data: Array<object>) => {
        this.backendPage = data;
      }
    )
  }
}
