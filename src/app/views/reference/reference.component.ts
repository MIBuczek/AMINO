import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { IReferenceContent, referenceContent } from './reference-lang-data';
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
  public faQuoteLeft = faQuoteLeft;
  public faQuoteRight = faQuoteRight;
  public faStar = faStar;

  constructor(public langSwitcher: LangSwitcherService) {}

  get referenceTextContent(): IReferenceContent {
    return referenceContent[this.langSwitcher.getCurrentLang];
  }
}
