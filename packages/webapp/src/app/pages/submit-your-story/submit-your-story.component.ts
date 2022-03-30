import { Component, OnInit, Input } from '@angular/core';
import { RouteService } from '../../_services/route.service';

@Component({
  selector: 'app-submit-your-story',
  templateUrl: './submit-your-story.component.html',
  styleUrls: ['./submit-your-story.component.scss']
})
export class SubmitYourStoryComponent implements OnInit {


  constructor(private routeService: RouteService) {

   }

  ngOnInit(): void {
  }

}
