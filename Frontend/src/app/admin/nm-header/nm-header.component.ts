import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nm-header',
  templateUrl: './nm-header.component.html',
  styleUrls: ['./nm-header.component.css']
})
export class NmHeaderComponent implements OnInit {

  constructor(private _router:Router) {}

  ngOnInit(): void {
  }
  newmanagers(){
    let url = localStorage.getItem("url")
this._router.navigate([`${url}/newmanager`])

  }
  
  formcontrols(){
    let url = localStorage.getItem("url")
this._router.navigate([`${url}/formcontrol`])

  }

}
