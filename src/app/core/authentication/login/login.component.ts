import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../../authService/authentication.service";
import { first } from "rxjs/operators";
import { UserData } from "src/app/shared/models/user";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    isSubmit = false;
    user: UserData;
    emailPattern = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthenticationService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.login();
    }

    login() {
        this.loginForm = this.formBuilder.group({
            emailAddress: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
            password: ["", [Validators.required]],
            rememberMe: [false],
        });
    }

    get formControl() {
        return this.loginForm.controls;
    }

    onLogin(): void {
        if (this.loginForm.invalid) {
            return;
        } else {
            const data = {
                email: this.formControl["emailAddress"].value,
                password: this.formControl["password"].value,
                rememberMe: this.formControl["rememberMe"].value,
            };
            this.authService
                .login(data.email, data.password, data.rememberMe)
                .pipe(first())
                .subscribe({
                    next: () => {
                        this.router.navigateByUrl("/admin");
                    },
                    error: error => {},
                });
        }
    }
}
