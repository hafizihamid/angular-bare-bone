import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthenticationService } from "../authService/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with accessToken if user is logged in and request is to the api url
        const user = this.authenticationService.userValue;
        const isLoggedIn = user && user.accessToken;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
            });
        }

        return next.handle(request);
    }
}