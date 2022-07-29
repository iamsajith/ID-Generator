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
    console.log("data",data)
    return this.http.post('http://localhost:8080/moderator/student',data)
  }
  accept(id:any){
    return this.http.post('http://localhost:8080/moderator/accept/'+id , null);
  }
  reject(id:any){
    return this.http.post('http://localhost:8080/moderator/reject/'+id , null)
  }

  studentHistory(data:any){
    return this.http.post('http://localhost:8080/moderator/studentHistory',data)

  }

}
