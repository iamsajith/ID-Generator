import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }
  studentRegister(data:any){
    return this._http.post("http://localhost:8080/student/register",data)
  }
  getID(id:any){
    return this._http.get("http://localhost:8080/idcard/"+id)
  }

}
