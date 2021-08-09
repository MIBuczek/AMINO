import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';

@Component({
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss'],
})
export class LangSwitcherComponent {
  public isLoading: null | boolean = null;
  constructor(public langSwitcherService: LangSwitcherService) {
    this.langSwitcherService.isToggleing.subscribe((status) => {
      this.isLoading = status;
    });
  }
}
