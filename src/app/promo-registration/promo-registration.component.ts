import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PromoRegistrationService } from './promo-registration.service';

@Component({
  selector: 'app-promo-registration',
  templateUrl: './promo-registration.component.html',
  styleUrls: ['./promo-registration.component.css']
})
export class PromoRegistrationComponent implements OnInit {

  constructor(private promoRegistrationService:PromoRegistrationService, private route:Router, private toastr: ToastrService) { }

  ngOnInit(): void { }

  product_name: string = '';
  price: string = '' ;
  discount: string = '' ;
  expiration_date: string = '';
  description: string = '';

  onSubmit() {
    this.promoRegistrationService.promoRegistration(this.product_name, Number(this.price), Number(this.discount), this.expiration_date, this.description)
      .subscribe({
        next: res=> {
          if (res && res !== undefined) {
            this.toastr.success('Promo successfully registered', 'Success');
            this.route.navigate(['dashboard']);
          } else {
            this.toastr.error('Error while registering the promo', 'Error');
          }
        }
      })
  }

}
