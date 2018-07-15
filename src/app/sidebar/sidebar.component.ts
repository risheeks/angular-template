import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router'
import { Url } from 'url';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe(
      (_: NavigationEnd) => this.currentUrl = _.url
    )
  }

  ngOnInit() {
  }

}
