import { Component } from '@angular/core';
import { ContactService } from '../../contact.service';
import { FormBuilder } from '@angular/forms';

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

  contactForm = this.formBuilder.group({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  handleSubmit(): void {
    this.ContactService.sendContact(
      'https://formspree.io/f/xzbyeged',
      this.contactForm.value
    );
  }
}
