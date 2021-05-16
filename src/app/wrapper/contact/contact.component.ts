import { Component } from '@angular/core';
import { ContactService } from '../../contact.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private ContactService: ContactService) {}
  faEnvelope = faEnvelope;
  faTimes = faTimes;
  faCheck = faCheck;
  submit = false;
  showErrMsg = false;
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
      updateOn: 'blur',
    }),
    subject: new FormControl(''),
    message: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000),
      ],
      updateOn: 'change',
    }),
  });

  get email() {
    return this.contactForm.get('email');
  }

  get name() {
    return this.contactForm.get('name');
  }

  get message() {
    return this.contactForm.get('message');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  handleSubmit(): void {
    if (this.contactForm.valid) {
      this.ContactService.sendContact(
        'https://formspree.io/f/xzbyeged',
        this.contactForm.value
      )
        .then(() => {
          this.submit = true;
          this.contactForm.reset();
        })
        .catch(() => (this.showErrMsg = true));
    }
  }
}
