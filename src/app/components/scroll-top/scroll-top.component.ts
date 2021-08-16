import { Component } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CheckPositionService } from 'src/app/service/check-position.service';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent {
  public faArrowUp = faArrowUp;
  constructor(public checkPosition: CheckPositionService) {}

  get isTop(): boolean {
    return this.checkPosition.checkPosition();
  }
}
