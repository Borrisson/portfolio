import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
} from '@angular/forms';
import { IContactForm } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false,
})
export class ContactComponent {
  @ViewChild('textarea') textarea: ElementRef;

  constructor(private ContactService: ContactService) {
    this.contactForm.valueChanges.subscribe((value: IContactForm) => {
      this.textarea.nativeElement.style.height = 'auto';
      this.textarea.nativeElement.style.height = `${this.textarea.nativeElement.scrollHeight}px`;
      localStorage.setItem('message', value.message);
      localStorage.setItem('subject', value.subject);
    });
  }

  submit = false;
  showErrMsg = false;
  messageValue = localStorage.getItem('message');
  subjectValue = localStorage.getItem('subject');

  contactForm = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', {
      validators: [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
      updateOn: 'blur',
    }),
    subject: new UntypedFormControl(this.subjectValue || ''),
    message: new UntypedFormControl(this.messageValue || '', {
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

  handleSubmit() {
    if (this.contactForm.valid) {
      this.ContactService.sendContact(
        'https://formspree.io/f/xzbyeged',
        this.contactForm.value,
      ).subscribe({
        next() {
          this.submit = true;
          this.showErrMsg = false;
          this.contactForm.reset();
        },
        error() {
          this.showErrMsg = true;
        },
      });
    }
  }
}
