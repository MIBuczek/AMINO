import { Component } from '@angular/core';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { galeryContent, IGallery } from './galery-lang-data';
import {
  faChevronRight,
  faChevronLeft,
  faWindowClose,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent {
  public showPicture: string | null = null;

  public faChevronRight = faChevronRight;
  public faChevronLeft = faChevronLeft;
  public faWindowClose = faWindowClose;

  constructor(public langSwitcher: LangSwitcherService) {}

  get galeryTextContent(): IGallery {
    return galeryContent[this.langSwitcher.getCurrentLang];
  }

  showImg(img: string): void {
    this.showPicture = img;
  }

  toggleImg(direction: string): void {
    if (!this.showPicture) {
      return;
    }
    const images = this.galeryTextContent.images as string[];
    const index = images.indexOf(this.showPicture);
    if (direction === 'left') {
      this.showPicture = images[index - 1]
        ? images[index - 1]
        : images[images.length - 1];
    } else {
      this.showPicture = images[index + 1] ? images[index + 1] : images[0];
    }
  }

  hideImg(): void {
    this.showPicture = null;
  }
}
