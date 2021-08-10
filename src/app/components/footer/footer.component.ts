import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { footerContent, IFooterContent } from './footer-lang-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public langSwitcher: LangSwitcherService) {}

  get footerContent(): IFooterContent {
    return footerContent[this.langSwitcher.getCurrentLang];
  }
}
