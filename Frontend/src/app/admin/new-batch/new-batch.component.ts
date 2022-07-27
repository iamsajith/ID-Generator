import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-new-batch',
  templateUrl: './new-batch.component.html',
  styleUrls: ['./new-batch.component.css']
})
export class NewBatchComponent implements OnInit {

  constructor(public service: AdminService) { }

  departments = [
    { id: 3, value: 'Dept 1'},
    { id: 2, value: 'Dept 2'},
    { id: 1, value: 'Dept 3'}
  ];

  ngOnInit(): void {
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
