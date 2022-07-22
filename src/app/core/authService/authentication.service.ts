import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserData } from "src/app/shared/models/user";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
    private userSubject: BehaviorSubject<UserData>;
    public user: Observable<UserData>;

    constructor(private router: Router, private http: HttpClient) {
        this.userSubject = new BehaviorSubject<UserData>(JSON.parse(localStorage.getItem("user")!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): UserData {
        return this.userSubject.value;
    }

    login(email: string, password: string, isRememberMe: boolean) {
        return this.http
            .post<UserData>(`${environment.apiUrl}/api/v1/admin/login`, { email, password })
            .pipe(
                map(user => {
                    if (isRememberMe) {
                        this.resetCredentials();
                        //your logged  out when you click logout
                        localStorage.setItem("user", JSON.stringify(user.user));
                        localStorage.setItem("accessToken", JSON.stringify(user.accessToken));
                        localStorage.setItem("rememberCurrentUser", "true");
                    }
                    // store user details and accessToken in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem("user", JSON.stringify(user.user));
                    sessionStorage.setItem("accessToken", JSON.stringify(user.accessToken));
                    this.userSubject.next(user);
                    return user;
                }),
            );
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        this.userSubject.next(null!);
        this.router.navigate(["/account/login"]);
    }

    resetCredentials() {
        this.userSubject.next(null!);
        localStorage.removeItem("rememberCurrentUser");
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
    }
}
