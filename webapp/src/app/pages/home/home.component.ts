import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WordpressApiService } from 'src/app/_services/wordpress-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, OnInit {
  destroyed = new Subject<void>();
  currentScreenSize: string;

  displayNameMap = new Map([
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
  ]);
  backendPage: any;

  constructor(public _router: Router, private observer: BreakpointObserver, private wordpress: WordpressApiService) { 
    this.observer
    .observe([
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for(const query of Object.keys(result.breakpoints)) {
        if(result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query);
        }
      }
    });
  }

  ngOnInit(): void {
    this.getPage()
  }

  ngAfterViewInit() {
    const els = document.querySelectorAll('.alignfull');
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
    }

    const eli = document.querySelectorAll('.is-nowrap.is-layout-flex');
    for (let index = 0; index < eli.length; index++) {
      (eli[index] as HTMLElement).style.flexDirection = "column";
      (eli[index] as HTMLElement).style.flexWrap = "nowrap";
    }

    console.log(document.querySelectorAll('.is-content-justification-center'));
    const eljc = document.querySelectorAll('.is-content-justification-center');
    for (let index = 0; index < eljc.length; index++) {
      (eljc[index] as HTMLElement).style.justifyContent = "center";
      (eljc[index] as HTMLElement).style.paddingTop = "1em";
    }
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  getPage() {
    this.wordpress.getSinglePage(6).subscribe(
      (data) => {
        this.backendPage = data;
      }
    )
  }
}
