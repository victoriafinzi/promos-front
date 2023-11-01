import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login/login.service';

@Injectable({
    providedIn:'root',
})

export class PromoRegistrationService{

    constructor(private httpClient:HttpClient, private loginService:LoginService){}
    

    public promoRegistration(product_name: string, price: number, discount: number, expiration_date: string, description: string):Observable<any>{
        const url = `${environment.apiUrl}/promos/`;

        const created_by = this.loginService.getUser();
        if (created_by) {
            return this.httpClient.post(url, {created_by, product_name, price, discount, expiration_date, description})
        } else {
            return throwError('User not authenticated. Please log in to perform this action.'); 
        }

    }
}