import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  studentcheck(data: any) {
    console.log(data)
    return this.http.post('http://localhost:3000/student', data)
  }
  moderatorcheck(data: any) {
    console.log(data)
    return this.http.post('http://localhost:3000/moderator', data)
  }
  admincheck(data: any) {
    console.log(data)
    return this.http.post('http://localhost:3000/admin', data)
  }

}
