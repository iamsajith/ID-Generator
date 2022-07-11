import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  data = {
    email:"",
    frname:"",
    urname:""

  }

  constructor() { }

  ngOnInit(): void {
  }
  Verify(){}

}
