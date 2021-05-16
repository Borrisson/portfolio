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
    email: new FormControl('', Validators.required),
    subject: new FormControl(''),
    message: new FormControl('', Validators.required),
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
