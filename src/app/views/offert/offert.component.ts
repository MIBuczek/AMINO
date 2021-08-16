import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  IGallery,
  IHeader,
  INavOffer,
  offerContent,
  offertGaleryContent,
  offertHeader,
} from './offert-text-content';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offert',
  templateUrl: './offert.component.html',
  styleUrls: ['./offert.component.scss'],
})
export class OffertComponent {
  public faChevronDown = faChevronDown;
  public activeRout: string | null = null;
  public showSideNavItems: string[] = [];
  constructor(
    public langSwitcher: LangSwitcherService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    router.events.subscribe(() => {
      const subIndex = router.url.lastIndexOf('=');
      this.activeRout = router.url.substring(subIndex + 1);
    });

    this.activeRoute.queryParamMap.subscribe((query) => {
      const queryParam = query.get('title');
      if (
        typeof queryParam === 'string' &&
        !this.showSideNavItems.includes(queryParam)
      ) {
        this.showSideNavItems.push(queryParam);
      }
    });
  }

  get offerHeaderContent(): IHeader {
    return offertHeader[this.langSwitcher.getCurrentLang];
  }
  get offerTextContent(): INavOffer[] {
    return offerContent[this.langSwitcher.getCurrentLang];
  }

  get offerGalleryContent(): IGallery {
    return offertGaleryContent[this.langSwitcher.getCurrentLang];
  }

  makeActive(rout: string): boolean {
    return rout === this.activeRout;
  }

  makeOpen(sidePart: string): void {
    const index = this.showSideNavItems.indexOf(sidePart);
    if (index < 0) {
      this.showSideNavItems.push(sidePart);
    } else {
      this.showSideNavItems.splice(index, 1);
    }
  }
}
