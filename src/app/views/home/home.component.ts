import { Component, OnInit } from '@angular/core';
import { homeContext } from './text-content-data/home-text-content';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public homeTextContent = homeContext;
  constructor() {}

  returnContent(content: string): string {
    return homeContext['PL'][`${content}`];
  }

  ngOnInit(): void {}
}
