import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForgotPasswordComponent } from "./authentication/forgot-password/forgot-password.component";
import { LoginComponent } from "./authentication/login/login.component";
import { ResetPasswordComponent } from "./authentication/reset-password/reset-password.component";
import { SetPasswordComponent } from "./authentication/set-password/set-password.component";

@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        SetPasswordComponent,
    ],
    imports: [CommonModule],
})
export class CoreModule {}
