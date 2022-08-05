import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  fetchModerator(data:any){
    return this.http.post('http://localhost:8080/moderator/fetchmoderator',data)

  }

  updateMod(id:any){
    

  }

  deleteMod(id:any){
return this.http.delete(`http://localhost:8080/admin/moderator/`+id)
  }
  addmanager(data:any){
    console.log(data)
    return this.http.post(`http://localhost:8080/admin/moderator/add/`,data)
  }

  updatefetch(id:any){
    return this.http.get(`http://localhost:8080/data/`+id)
  }
  update(data:any){
    return this.http.put("http://localhost:8080/update",data)
  }


  Course(data:any){
    console.log(data)
    return this.http.post("http://localhost:8080/courseaction",data)
  }
  Batch(data:any){
    console.log(data)
    return this.http.post("http://localhost:8080/batchaction",data)
  }

}
