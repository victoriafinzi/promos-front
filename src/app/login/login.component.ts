import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private loginService:LoginService, private route:Router, private toastr: ToastrService) { }

  ngOnInit(): void { }

  username: string = '';
  password: string = '';

  onSubmit() {
    this.loginService.login(this.username, this.password)
      .subscribe({
        next: res=> {
          console.log(this.loginService.getToken())
          const access_token = this.loginService.getToken()
          if(access_token && access_token !== undefined) {
            this.route.navigate(['dashboard']);
          }
          else {
            this.toastr.error('Invalid user name or password', 'Error');
          }
        }
      })
  }

}
