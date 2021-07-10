import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { cardContent } from './card-lang-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  public cardContent = cardContent;

  constructor(public langSwitcher: LangSwitcherService) {}

  get currentLang(): string {
    return this.langSwitcher.currentLang.getValue();
  }
}
