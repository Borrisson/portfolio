import { Component } from '@angular/core';
import { ContactService } from '../../contact.service';
import { FormBuilder } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(
    private ContactService: ContactService,
    private formBuilder: FormBuilder
  ) {}
  faEnvelope = faEnvelope;
  contactForm = this.formBuilder.group({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  handleSubmit(): void {
    const { name, email, message } = this.contactForm.value;
    if (name && email && message) {
      this.ContactService.sendContact(
        'https://formspree.io/f/xzbyeged',
        this.contactForm.value
      );
      this.contactForm.reset();
    } else {
    }
  }
}
