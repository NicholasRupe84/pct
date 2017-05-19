import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SendMailService, Message } from '../services/send-mail.service';

@Component({
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent implements OnInit {
  constructor(private router: Router, private sendMailService: SendMailService) {}

  model = new Message('', '', '');

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  sendEmail() {
    let emailOperation = this.sendMailService.sendMail(this.model);

    emailOperation.subscribe();
  }

  enableSubmitButton(formIsValid: boolean): boolean {
    let re = /.+@.+\..+/;
    let validEmail = re.exec(this.model.email);

    return validEmail && formIsValid;
  }
}
