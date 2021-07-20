import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { companyContent } from './company-lang-data';
import {
  faClock,
  faGem,
  faUniversity,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent {
  public companyContent = companyContent;
  public faClock = faClock;
  public faGem = faGem;
  public faUniversity = faUniversity;
  public faCheckSquare = faCheckSquare;

  constructor(public langSwitcher: LangSwitcherService) {}

  get contentBody(): any {
    return companyContent[this.langSwitcher.getCurrentLang];
  }

  getIcone(icone: string): any {
    switch (icone) {
      case 'faClock':
        return this.faClock;
      case 'faGem':
        return this.faGem;
      case 'faUniversity':
        return this.faUniversity;
      case 'faCheckSquare':
        return this.faCheckSquare;
    }
  }
}
