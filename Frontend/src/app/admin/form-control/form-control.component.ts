import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
  Types=["Course", "Batch"]
  // studentData:any
  data = {
    add: "",
    type: "",
  }
  batchmanager={
    name:"",
    email:"",
    phone:"",
    designation:"",
    course:"",
    batch:"",
  }

  constructor() { }

  ngOnInit(): void {
  }

  displayStyle = "none";
  displayStyle1 = "none";
  displayStyle2 = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  Save(){}

  openPopup1() {
    this.displayStyle1 = "block";
  }
  closePopup1() {
    this.displayStyle1 = "none";
  }
  Save1(){}

  openPopup2() {
    this.displayStyle2 = "block";
  }
  closePopup2() {
    this.displayStyle2 = "none";
  }
  Save2(){}


}
