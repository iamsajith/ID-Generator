import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bm-header',
  templateUrl: './bm-header.component.html',
  styleUrls: ['./bm-header.component.css']
})
export class BmHeaderComponent implements OnInit {

  constructor(private _router:Router) { }

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
