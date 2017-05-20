import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SendMailService, Message } from '../services/send-mail.service';

@Component({
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent implements OnInit {
  model = new Message('', '', '');
  public successful = false;

  constructor(private router: Router, private sendMailService: SendMailService) {}

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

    emailOperation.subscribe(
      mail => {
        this.model = new Message('', '', '');
        this.successful = true;
      },
      err => {
        console.log(err);
      }
    );
  }

  enableSubmitButton(formIsValid: boolean): boolean {
    let re = /.+@.+\..+/;
    let validEmail = re.exec(this.model.email);

    return validEmail && formIsValid;
  }
}
