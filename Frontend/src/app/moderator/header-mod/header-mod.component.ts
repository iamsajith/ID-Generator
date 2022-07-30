import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-mod',
  templateUrl: './header-mod.component.html',
  styleUrls: ['./header-mod.component.css']
})
export class HeaderModComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  signOut(){
    localStorage.removeItem("url")
    localStorage.removeItem("token")
    this._router.navigate(['/'])
  }

}
