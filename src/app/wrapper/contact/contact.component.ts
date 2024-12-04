import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { IContactForm } from './contact';
import { catchError, throwError } from 'rxjs';

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

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
      updateOn: 'blur',
    }),
    subject: new FormControl(localStorage.getItem('subject') || ''),
    message: new FormControl(localStorage.getItem('message') || '', {
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
        this.contactForm.getRawValue(),
      )
        .pipe(
          catchError(() => {
            this.showErrMsg = true;
            return throwError(() => new Error('Something bad happened.'));
          }),
        )
        .subscribe(() => {
          this.submit = true;
          this.showErrMsg = false;
          this.contactForm.reset();
        });
    }
  }
}
