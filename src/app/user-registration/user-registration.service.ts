import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root',
})

export class UserRegistrationService{

    constructor(private httpClient:HttpClient){}

    public userRegistration(name:string, phone_number:string):Observable<any>{
        const url = `${environment.apiUrl}/users/`;

        return this.httpClient.post(url, {name, phone_number})
    }
}