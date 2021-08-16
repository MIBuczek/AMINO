import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { INavItem, navbarContent } from './navbar-lang-data';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CheckPositionService } from 'src/app/service/check-position.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public faBars = faBars;
  public isActive = false;

  constructor(
    public langSwitcher: LangSwitcherService,
    public checkPosition: CheckPositionService
  ) {}

  get isTop(): boolean {
    return this.checkPosition.checkPosition();
  }
  get navbarTextContent(): INavItem[] {
    return navbarContent[this.langSwitcher.getCurrentLang];
  }

  get currentLang(): string {
    return this.langSwitcher.getCurrentLang;
  }

  toggle(): void {
    this.isActive = !this.isActive;
  }
}
