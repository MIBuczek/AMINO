import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { cardContent, ICardContent } from './card-lang-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(public langSwitcher: LangSwitcherService) {}

  get cardContent(): ICardContent {
    return cardContent[this.langSwitcher.getCurrentLang];
  }
}
