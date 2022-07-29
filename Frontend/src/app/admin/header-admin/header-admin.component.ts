import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  signOut(){
    localStorage.removeItem("url")
    localStorage.removeItem("token")
    this._router.navigate(['/'])
  }

}
