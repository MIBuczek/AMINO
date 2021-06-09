import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

import {
  faPhone,
  faEnvelope,
  faArrowCircleUp,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class SharedModule {
  constructor(public faIconeLibary: FaIconLibrary) {
    this.faIconeLibary.addIcons(faPhone, faEnvelope, faArrowCircleUp);
  }
}
