import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';

interface IPageNotFoundContent {
  subheader: string;
  header: string;
  button: string;
}

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  public pageContent: { [x: string]: IPageNotFoundContent } = {
    PL: {
      subheader: 'Bład 404',
      header: 'Strona nie istnieje',
      button: 'Wróc na stronę główną',
    },
    EN: {
      subheader: 'Error 404',
      header: 'Page not found',
      button: 'Back to main page',
    },
  };

  constructor(public langSwitcher: LangSwitcherService) {}

  get pageTextContent(): IPageNotFoundContent {
    return this.pageContent[this.langSwitcher.getCurrentLang];
  }
}
