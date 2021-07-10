import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  public path: { title: string; path: string }[] = [];
  public actualPage = '';

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.preparePath(event.url);
        this.preparePageTitle(event.url);
      }
    });
  }

  preparePageTitle(url: string): void {
    if (url.length === 1) {
      this.actualPage = 'Strona Główna';
    } else {
      this.actualPage = url.split('/')[1];
    }
  }

  preparePath(url: string): void {
    const pathArray = url.split('/').filter((s) => s.length);
    if (!pathArray.length) {
      this.path = [];
    } else if (pathArray.length === 1) {
      this.path = [{ title: pathArray[0], path: pathArray[0] }];
    } else {
      this.path = [
        { title: pathArray[0], path: pathArray[0] },
        { title: 'post', path: `${pathArray[0]}/${pathArray[1]}` },
      ];
    }
  }
}
