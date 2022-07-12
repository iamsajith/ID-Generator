import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  studentcheck(data: any) {
    return this.http.post('http://localhost:8080/student', data)
  }
  moderatorcheck(data: any) {
    return this.http.post('http://localhost:8080/moderator', data)
  }
  admincheck(data: any) {
    return this.http.post('http://localhost:8080/admin', data)
  }

  studentforgot(data:any){
    return this.http.post('http://localhost:8080/student/newpassword',data)
  }

  moderatorforgot(data:any){
    return this.http.post('http://localhost:8080/moderator/newpassword',data)
  }

  adminforgot(data:any){
    return this.http.post('http://localhost:8080/admin/newpassword',data)
  }

}
