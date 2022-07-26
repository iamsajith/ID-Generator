import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header-applications',
  templateUrl: './header-applications.component.html',
  styleUrls: ['./header-applications.component.css']
})
export class HeaderApplicationsComponent implements OnInit {
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  history(){
let url = localStorage.getItem("url")
this._router.navigate([`${url}/history`])
  }


}
