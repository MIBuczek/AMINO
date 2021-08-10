import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { contactContent, IContact } from './contact-lang-data';
import {
  faClock,
  faPhone,
  faEnvelope,
  faExclamationCircle,
  faMapMarked,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public faClock = faClock;
  public faPhone = faPhone;
  public faEnvelope = faEnvelope;
  public faExclamationCircle = faExclamationCircle;
  public faMapMarked = faMapMarked;

  public contactContent = contactContent;
  public mailMessage: null | string = null;

  constructor(public langSwitcher: LangSwitcherService) {}

  get contactTextContent(): IContact {
    return contactContent[this.langSwitcher.getCurrentLang];
  }

  handleSubmit(myForm: NgForm): void {
    if (!myForm.valid) {
      return;
    }
    const message = `
    ${myForm.value.name}
    ${myForm.value.email}
    \
    \
    ${myForm.value.message}
    `;
    this.mailMessage = `mailto:animo@animo.wroclaw.pl?subject=${myForm.value.subject}&body=${message}`;
  }
}
