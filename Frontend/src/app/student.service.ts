import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  server_address = 'api'

  constructor(private _http: HttpClient) { }
  studentRegister(data:any){
    return this._http.post(`${this.server_address}/student/register`,data)
  }
  getID(id:any){
    return this._http.get(`${this.server_address}/idcard/`+id)
  }
  getCourses(){
    return this._http.get(`${this.server_address}/courses`)
  }

}
