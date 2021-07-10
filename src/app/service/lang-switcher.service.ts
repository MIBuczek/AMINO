import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangSwitcherService {
  public currentLang = new BehaviorSubject('PL');

  constructor() {}

  langToggle(): void {
    if (this.currentLang.getValue() === 'PL') {
      this.currentLang.next('EN');
    } else {
      this.currentLang.next('PL');
    }
  }

  get getCurrentLang(): string {
    return this.currentLang.getValue();
  }
}
