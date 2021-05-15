import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendContact(url: string, data: object) {
    this.http
      .post(url, data)
      .toPromise()
      .then((data: {}) => console.log(data))
      .catch((err: {}) => console.log(err));
  }
}
