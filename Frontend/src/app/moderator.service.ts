import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModeratorService {
  server_address = 'api'
  constructor(private http: HttpClient) {}
  studentData(id: any) {
    console.log(id)
    return this.http.get(`${this.server_address}/moderator/` + id);
  }
  fetchStudent(data:any){
    console.log("data",data)
    return this.http.post(`${this.server_address}/moderator/student`,data)
  }
  accept(id:any){
    return this.http.post(`${this.server_address}/moderator/accept/`+id , null);
  }
  reject(id:any){
    return this.http.post(`${this.server_address}/moderator/reject/`+id , null)
  }

  studentHistory(data:any){
    return this.http.post(`${this.server_address}/moderator/studentHistory`,data)

  }

}
