import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  public path: {
    title: string;
    path: string;
    query?: { [x: string]: string };
  }[] = [];
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
        this.actualPage = url.substring(index + 1).replace(/[^a-zA-Z ]/g, ' ');
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
        const equalFirstIndext = pathArray[0].indexOf('=');
        const equalLastIndex = pathArray[0].lastIndexOf('=');
        const amperIndext = pathArray[0].indexOf('&');
        const modeledPath = pathArray[0].substring(0, index);
        const secondTitle = pathArray[0]
          .substring(equalLastIndex + 1)
          .replace(/[^a-zA-Z ]/g, ' ');
        const modeledTitleQury = pathArray[0].substring(
          equalFirstIndext + 1,
          amperIndext
        );
        const modeleSingledQuery = pathArray[0].substring(equalLastIndex + 1);
        this.path = [
          { title: modeledPath, path: modeledPath },
          {
            title: secondTitle,
            path: modeledPath,
            query: { title: modeledTitleQury, single: modeleSingledQuery },
          },
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
