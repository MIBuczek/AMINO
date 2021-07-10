import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import {
  homeValue,
  homeOffert,
  homeAbout,
} from './text-content-data/home-text-content';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public show = false;
  public homeValue = homeValue;
  public homeOffert = homeOffert;
  public homeAbout = homeAbout;

  constructor(public langSwitcher: LangSwitcherService) {}

  get currentLang(): string {
    return this.langSwitcher.currentLang.getValue();
  }
}
