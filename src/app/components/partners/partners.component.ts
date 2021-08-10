import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { images, IPartner, partnersContent } from './partners-lang.data';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent {
  public images = images;
  constructor(public langSwitcher: LangSwitcherService) {}

  get partnersTextContent(): IPartner {
    return partnersContent[this.langSwitcher.getCurrentLang];
  }
}
