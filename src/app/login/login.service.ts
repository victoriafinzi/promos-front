import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root',
})

export class LoginService{

    constructor(private httpClient:HttpClient){}

    public login(username:string, password:string):Observable<any>{
        const url = `${environment.apiUrl}/login/`;

        return this.httpClient.post(url, {username, password}).pipe(
            map((data: any) => {
                if(data) {
                    this.setTokenLocalStorage(data)
                }
            }),
            catchError((err) =>{
                this.deleteTokenLocalStorage();
                throw err
                
            })
        )
    }

    public getToken():string | null {
        return localStorage.getItem(environment.access_token);
    }

    public getUser():number | null {
        return Number(localStorage.getItem(environment.user));
    }

    private setTokenLocalStorage(response:any):void{
        localStorage.setItem(environment.user, response.user.id)
        localStorage.setItem(environment.access_token, response.access_token)
    }

    private deleteTokenLocalStorage():void{
        localStorage.removeItem(environment.access_token);
        localStorage.removeItem(environment.user);
    }
}