import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ContactService } from '../../contact.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { IContactForm } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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

  faEnvelope = faEnvelope;
  faTimes = faTimes;
  faCheck = faCheck;
  submit = false;
  showErrMsg = false;
  messageValue = localStorage.getItem('message');
  subjectValue = localStorage.getItem('subject');

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
      updateOn: 'blur',
    }),
    subject: new FormControl(this.subjectValue || ''),
    message: new FormControl(this.messageValue || '', {
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
        this.contactForm.value
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
