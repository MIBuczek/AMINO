import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { carouselContent } from './carousel-lang-data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CarouselComponent {
  public carouselContent = carouselContent;

  constructor(
    public config: NgbCarouselConfig,
    public langSwitcher: LangSwitcherService
  ) {
    config.interval = 3000;
    config.pauseOnHover = false;
  }
}
