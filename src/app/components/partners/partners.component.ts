import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { images, partnersContent } from './partners-lang.data';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent {
  public partnersContent = partnersContent;
  public images = images;
  constructor(public langSwitcher: LangSwitcherService) {}
}
