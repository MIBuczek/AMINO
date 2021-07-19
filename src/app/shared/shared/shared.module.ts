import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

import {
  faPhone,
  faEnvelope,
  faHome,
  faGem,
  faHandshake,
  faUniversity,
  faClock,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class SharedModule {
  constructor(public faIconeLibary: FaIconLibrary) {
    this.faIconeLibary.addIcons(
      faPhone,
      faEnvelope,
      faHome,
      faGem,
      faUniversity,
      faClock,
      faCheckSquare,
      faHandshake
    );
  }
}
