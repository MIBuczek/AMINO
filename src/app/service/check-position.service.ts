import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckPositionService {
  @HostListener('window:scroll', ['$event'])
  checkPosition(): boolean {
    if (window.pageYOffset > 60) {
      return true;
    } else {
      return false;
    }
  }
}
