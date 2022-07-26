import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-history',
  templateUrl: './header-history.component.html',
  styleUrls: ['./header-history.component.css']
})
export class HeaderHistoryComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  applications(){
    let url = localStorage.getItem("url")
    this._router.navigate([`${url}/`])
  }

}
