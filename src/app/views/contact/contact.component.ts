import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import { contactContent } from './contact-lang-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public contactContent = contactContent;
  public mailMessage: null | string = null;
  constructor(public langSwitcher: LangSwitcherService) {}

  handleSubmit(myForm: NgForm): void {
    console.log(myForm);
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
    this.mailMessage = `mailto:animo@animo.wroclaw.pl?subject=${myForm.value.subject};body=${message}`;
  }
}
