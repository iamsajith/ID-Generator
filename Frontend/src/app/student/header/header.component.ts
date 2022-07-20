import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {


  }
  apply(){
    this._router.navigate([`/${localStorage.getItem("url")}/apply`])
  }
  status(){

    this._router.navigate([`/${localStorage.getItem("url")}/status`])
  }
  signOut(){
    localStorage.removeItem("url")
    localStorage.removeItem("token")
    this._router.navigate(['/'])
  }

}
