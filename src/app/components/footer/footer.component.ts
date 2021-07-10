import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { footerContent } from './footer-lang-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public footerContent = footerContent;
  constructor(public langSwitcher: LangSwitcherService) {}
}
