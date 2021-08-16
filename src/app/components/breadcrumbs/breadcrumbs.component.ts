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
    const checkUrl = url.split('/').filter((s) => s.length).length;
    if (checkUrl === 0) {
      this.actualPage = 'Strona Główna';
    } else if (checkUrl === 1) {
      const index = url.lastIndexOf('=');
      if (index > -1) {
        this.actualPage = url.substring(index + 1).replace('-', ' ');
      } else {
        this.actualPage = url.split('/')[1];
      }
    } else {
      const subPageTitle = url.split('/')[2];
      this.actualPage = ['1', '2', '3', '4'].includes(subPageTitle)
        ? 'Post'
        : subPageTitle;
    }
  }

  preparePath(url: string): void {
    const pathArray = url.split('/').filter((s) => s.length);
    if (!pathArray.length) {
      this.path = [];
    } else if (pathArray.length === 1) {
      const index = pathArray[0].indexOf('?');
      if (index > -1) {
        const subIndex = pathArray[0].lastIndexOf('=');
        const modeledPath = pathArray[0].substring(0, index);
        const secondTitle = pathArray[0]
          .substring(subIndex + 1)
          .replace('-', ' ');
        this.path = [
          { title: modeledPath, path: modeledPath },
          { title: secondTitle, path: pathArray[0] },
        ];
      } else {
        this.path = [{ title: pathArray[0], path: pathArray[0] }];
      }
    } else {
      this.path = [
        { title: pathArray[0], path: pathArray[0] },
        { title: 'post', path: `${pathArray[0]}/${pathArray[1]}` },
      ];
    }
  }
}
