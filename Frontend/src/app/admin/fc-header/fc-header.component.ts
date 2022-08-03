import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fc-header',
  templateUrl: './fc-header.component.html',
  styleUrls: ['./fc-header.component.css']
})
export class FcHeaderComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
//   newmanagers(){
//     let url = localStorage.getItem("url")
// this._router.navigate([`${url}/newmanager`])

//   }
  
  formcontrols(){
    let url = localStorage.getItem("url")
this._router.navigate([`${url}/formcotrol`])

  }

}
