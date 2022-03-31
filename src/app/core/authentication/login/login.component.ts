import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.login();
    }

    login() {
        this.loginForm = this.formBuilder.group({});
    }
}
