import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public isActive = false;

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
