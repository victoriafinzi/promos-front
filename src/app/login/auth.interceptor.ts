import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from './login.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const myToken = this.loginService.getToken();

        //se estiver logado o token existir
        if(myToken !== null){
            const authResquest = req.clone({setHeaders: {'Authorization' : `Bearer ${myToken}`}})
            return next.handle(authResquest);
        }

        return next.handle(req);
    }

}