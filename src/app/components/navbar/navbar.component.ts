import { Component, HostListener } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { INavItem, navbarContent } from './navbar-lang-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public isActive = false;

  constructor(public langSwitcher: LangSwitcherService) {}

  get navbarTextContent(): INavItem[] {
    return navbarContent[this.langSwitcher.getCurrentLang];
  }

  get currentLang(): string {
    return this.langSwitcher.getCurrentLang;
  }

  @HostListener('window:scroll', ['$event'])
  checkPosition(): boolean {
    if (window.pageYOffset > 80) {
      return true;
    } else {
      return false;
    }
  }

  toggle(): void {
    this.isActive = !this.isActive;
  }
}
