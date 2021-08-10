import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { IModalContent, modalContent } from './modal-lang-data';
import {
  faTimes,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input()
  modal!: BehaviorSubject<boolean>;

  public faExclamationCircle = faExclamationCircle;
  public faTimes = faTimes;
  public mailMessage: string | undefined;

  constructor(public langSwitcher: LangSwitcherService) {}

  get modalTextContent(): IModalContent {
    return modalContent[this.langSwitcher.getCurrentLang];
  }

  handleSubmit(myForm: NgForm): void {
    if (!myForm.valid) {
      return;
    }
    const message = `
    ${myForm.value.name}
    ${myForm.value.email}
    ${myForm.value.message}
    `;
    this.mailMessage = `mailto:animo@animo.wroclaw.pl?subject=${myForm.value.subject}&body=${message}`;
  }

  clearForm(myForm: NgForm): void {
    myForm.reset();
  }
}
