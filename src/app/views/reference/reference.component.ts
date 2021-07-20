import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { referenceContent } from './reference-lang-data';
import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent {
  public referenceContent = referenceContent;
  public faQuoteLeft = faQuoteLeft;
  public faQuoteRight = faQuoteRight;
  public faStar = faStar;

  constructor(public langSwitcher: LangSwitcherService) {}

  get referenceTextContent() {
    return referenceContent[this.langSwitcher.getCurrentLang];
  }
}
