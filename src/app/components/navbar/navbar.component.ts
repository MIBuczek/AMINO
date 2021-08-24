import { Component, HostListener } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { INavItem, navbarContent } from './navbar-lang-data';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public faBars = faBars;
  public isActive = false;

  constructor(public langSwitcher: LangSwitcherService) {}

  @HostListener('window:scroll', ['$event'])
  checkPosition(): boolean {
    if (window.pageYOffset > 60) {
      return true;
    } else {
      return false;
    }
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
