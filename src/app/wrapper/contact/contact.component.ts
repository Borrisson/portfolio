import { Component } from '@angular/core';
import { ContactService } from '../../contact.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private ContactService: ContactService) {}
  faEnvelope = faEnvelope;
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    subject: new FormControl(''),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
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

  handleSubmit(): void {
    this.ContactService.sendContact(
      'https://formspree.io/f/xzbyeged',
      this.contactForm.value
    );
    this.contactForm.reset();
  }
}
