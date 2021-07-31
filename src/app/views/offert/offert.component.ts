import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { offerContent } from './offert-text-content';

@Component({
  selector: 'app-offert',
  templateUrl: './offert.component.html',
  styleUrls: ['./offert.component.scss'],
})
export class OffertComponent implements OnInit {
  constructor(public langSwitcher: LangSwitcherService) {}

  get offerTextContent(): any {
    return offerContent[this.langSwitcher.getCurrentLang];
  }

  ngOnInit(): void {}
}
