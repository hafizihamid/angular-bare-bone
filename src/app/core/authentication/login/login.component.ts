import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "src/app/shared/models/user";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    isSubmit = false;
    user: User;
    emailPattern = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.login();
    }

    login() {
        this.loginForm = this.formBuilder.group({
            emailAddress: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
            password: ["", [Validators.required]],
            rememberMe: [false, Validators.requiredTrue],
        });
    }

    get formControl() {
        return this.loginForm.controls;
    }

    onLogin(): void {
        if (this.loginForm.invalid) {
            return;
        } else {
        }
    }
}
