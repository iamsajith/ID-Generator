import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  server_address = 'api'

  constructor(private http:HttpClient) { }
  fetchModerator(data:any){
    return this.http.post(`${this.server_address}/moderator/fetchmoderator`,data)

  }

  updateMod(id:any){
    

  }

  deleteMod(id:any){
return this.http.delete(`${this.server_address}/admin/moderator/`+id)
  }
  addmanager(data:any){
    console.log(data)
    return this.http.post(`${this.server_address}/admin/moderator/add/`,data)
  }

  updatefetch(id:any){
    return this.http.get(`${this.server_address}/data/`+id)
  }
  update(data:any){
    return this.http.put(`${this.server_address}/update`,data)
  }


  Course(data:any){
    console.log(data)
    return this.http.post(`${this.server_address}/courseaction`,data)
  }
  Batch(data:any){
    console.log(data)
    return this.http.post(`${this.server_address}/batchaction`,data)
  }

}
