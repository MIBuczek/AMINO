import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangSwitcherService {
  public currentLang = new BehaviorSubject('PL');
  public isToggleing = new BehaviorSubject(false);
  constructor() {}

  langToggle(): void {
    this.isToggleing.next(true);
    if (this.currentLang.getValue() === 'PL') {
      setTimeout(() => {
        this.currentLang.next('EN');
        this.isToggleing.next(false);
      }, 800);
    } else {
      setTimeout(() => {
        this.currentLang.next('PL');
        this.isToggleing.next(false);
      }, 800);
    }
  }

  get getCurrentLang(): string {
    return this.currentLang.getValue();
  }
}
