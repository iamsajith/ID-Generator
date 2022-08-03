import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  User = {
    email: '',
    password: '',
  };

  constructor(private _auth: AuthService, private _router: Router,private toastr: ToastrService) {
    
  }

  ngOnInit(): void {
    AOS.init();
    if (this._auth.isLoggedIn()) {
      this._router.navigate([localStorage.getItem("url")]);
    }
  }
  Verify = () => {
    const x: string = this.User.password.slice(3, 6).toLowerCase();
    if (x === 'stu') {
      this._auth.studentcheck(this.User).subscribe((data) => {
        if(data != null){
        this.toastr.success("You can now apply ID Card","Success")
        const info = JSON.parse(JSON.stringify(data));
        console.log(data)
        localStorage.setItem('token', info.token);
        localStorage.setItem('url', `/student/${info.data}/`);
        this._router.navigate(['/student/', info.data]);
        }
        else{
          this.toastr.error("Error Occured")
        }
      });
    } else if (x === 'mod') {
      this._auth.moderatorcheck(this.User).subscribe((data) => {
        if(data != null){
        this.toastr.success("Success")
        const info = JSON.parse(JSON.stringify(data));
        console.log(info);
        localStorage.setItem('token', info.token);
        localStorage.setItem('url', `/moderator/${info.data}/`);
        this._router.navigate(['/moderator/', info.data]);
        }
        else{
          this.toastr.error("Error Occured")
        }
      });
    } else if (x === 'adm') {
      this._auth.admincheck(this.User).subscribe((data) => {
        if(data != null){
          this.toastr.success("Success")
        const info = JSON.parse(JSON.stringify(data));
        localStorage.setItem('token', info.token);
        localStorage.setItem('url', `/admin/${info.data}/`);
        this._router.navigate(['/admin/', info.data]);
        }
        else{
          this.toastr.error("Error Occured")
        }
      });
    } else {
     
    }
  };
}