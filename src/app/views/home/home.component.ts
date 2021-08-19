import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import {
  homeValue,
  homeServices,
  homeAbout,
  IHomeContentValue,
  IHomeContentAbout,
  IHomeContentServices,
} from './text-content-data/home-text-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public show = false;
  public modal = new BehaviorSubject<boolean>(false);

  constructor(public langSwitcher: LangSwitcherService) {}

  get homeContentValue(): IHomeContentValue {
    return homeValue[this.langSwitcher.getCurrentLang];
  }

  get homeContentService(): IHomeContentServices {
    return homeServices[this.langSwitcher.getCurrentLang];
  }

  get homeContentAbout(): IHomeContentAbout[] {
    return homeAbout[this.langSwitcher.getCurrentLang];
  }

  get currentLang(): string {
    return this.langSwitcher.currentLang.getValue();
  }
}
