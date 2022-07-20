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
    return this.http.post('http://localhost:8080/student/pin',data)
  }

  moderatorforgot(data:any){
    console.log(data)
    return this.http.post('http://localhost:8080/moderator/pin',data)
  }

  adminforgot(data:any){
    return this.http.post('http://localhost:8080/admin/pin',data)
  }

  studentnewpassword(data:any){
    console.log(data)
    return this.http.post('http://localhost:8080/student/newpassword',data)
  }

  moderatornewpassword(data:any){
    return this.http.post('http://localhost:8080/moderator/newpassword',data)
  }

  adminnewpassword(data:any){
    return this.http.post('http://localhost:8080/admin/newpassword',data)
  }

  isLoggedIn(){
return !!localStorage.getItem("token")
  }

}
