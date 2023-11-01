import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRegistrationService } from './user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{

  constructor(private userRegistrationService:UserRegistrationService, private route:Router, private toastr: ToastrService) { }

  ngOnInit(): void { }

  name: string = '';
  phone: string = '';

  onSubmit() {
    this.userRegistrationService.userRegistration(this.name, this.phone)
      .subscribe({
        next: res=> {
          if (res && res !== undefined) {
            this.toastr.success('User successfully registered', 'Success');
          } else {
            this.toastr.error('Error while registering the user', 'Error');
          }
        }
      })
  }

}
