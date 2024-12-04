import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IContactForm } from './contact';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private url = 'https://formspree.io/f/xdopzqzj';

  sendContact(data: IContactForm) {
    return inject(HttpClient)
      .post(this.url, data)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error,
      );
    }

    return throwError(
      () => new Error('Something bad happened; please try again later.'),
    );
  }
}
