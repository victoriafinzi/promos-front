import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root',
})

export class PromoDashboardService{

    constructor(private httpClient:HttpClient){}
    

    public promos():Observable<any>{
        const url = `${environment.apiUrl}/promos/`;

        return this.httpClient.get(url)
    }

    public clients():Observable<any>{
        const url = `${environment.apiUrl}/users/clients`;

        return this.httpClient.get(url)
    }
}