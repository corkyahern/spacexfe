import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable()
export class Authinterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            const token = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : ""
            const authReq = req.clone({
                headers: req.headers.set("Authorization", token)
            })
            return next.handle(authReq)
    }
}