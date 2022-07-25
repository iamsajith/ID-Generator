import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModeratorService {
  constructor(private http: HttpClient) {}
  studentData(id: any) {
    console.log(id)
    return this.http.get('http://localhost:8080/moderator/' + id);
  }
  fetchStudent(data:any){
    return this.http.get('http://localhost:8080/moderator/students/'+data)
  }
}
