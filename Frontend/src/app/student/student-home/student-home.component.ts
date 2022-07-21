import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  id = ""

  constructor(private _actiroute: ActivatedRoute, private _route:Router, private _auth:AuthService) { }

  ngOnInit(): void {
    AOS.init();
    this.id = this._actiroute.snapshot.params['id'];
    localStorage.setItem("id",this.id)
  }

}
