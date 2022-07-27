import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    batch: new FormControl('', Validators.required),
    department: new FormControl(0, Validators.required),
    isPermanent: new FormControl(false, Validators.required)

  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      fullname: '',
      email: '',
      batch: '',
      department: 0,
      isPermanent: false
    });
  }
}
