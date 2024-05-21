import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './core/services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        const authdata = this.authenticationService.getAuthorization();
        if (authdata) {
            request = request.clone({
                setHeaders: {
                    "Authorization": `Basic ${authdata}`
                }
            });
        }
        return next.handle(request);
    }
}