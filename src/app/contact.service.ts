import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendContact(event) {
    this.http
      .post(event.target.action, event.target.data)
      .toPromise()
      .then((data: {}) => console.log(data))
      .catch((err: {}) => console.log(err));
  }
}
