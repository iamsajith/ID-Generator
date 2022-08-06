import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server_address = 'api'

  constructor(public http: HttpClient) { }

  studentcheck(data: any) {
    return this.http.post(`${this.server_address}/student`, data)
  }
  moderatorcheck(data: any) {
    return this.http.post(`${this.server_address}/moderator`, data)
  }
  admincheck(data: any) {
    return this.http.post(`${this.server_address}/admin`, data)
  }

  studentforgot(data:any){
    return this.http.post(`${this.server_address}/student/pin`,data)
  }

  moderatorforgot(data:any){
    console.log(data)
    return this.http.post(`${this.server_address}/moderator/pin`,data)
  }

  adminforgot(data:any){
    return this.http.post(`${this.server_address}/admin/pin`,data)
  }

  studentnewpassword(data:any){
    console.log(data)
    return this.http.post(`${this.server_address}/student/newpassword`,data)
  }

  moderatornewpassword(data:any){
    return this.http.post(`${this.server_address}/moderator/newpassword`,data)
  }

  adminnewpassword(data:any){
    return this.http.post(`${this.server_address}/admin/newpassword`,data)
  }

  isLoggedIn(){
return !!localStorage.getItem("token")
  }

}
