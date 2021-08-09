import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import {
  IGallery,
  IHeader,
  INavOffer,
  offerContent,
  offertGaleryContent,
  offertHeader,
} from './offert-text-content';

@Component({
  selector: 'app-offert',
  templateUrl: './offert.component.html',
  styleUrls: ['./offert.component.scss'],
})
export class OffertComponent {
  constructor(public langSwitcher: LangSwitcherService) {}

  get offerHeaderContent(): IHeader {
    return offertHeader[this.langSwitcher.getCurrentLang];
  }
  get offerTextContent(): INavOffer[] {
    return offerContent[this.langSwitcher.getCurrentLang];
  }

  get offerGalleryContent(): IGallery {
    return offertGaleryContent[this.langSwitcher.getCurrentLang];
  }
}
