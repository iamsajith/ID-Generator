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

}
