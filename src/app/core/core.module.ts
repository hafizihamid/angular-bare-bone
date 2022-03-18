import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForgotPasswordComponent } from "./authentication/forgot-password/forgot-password.component";
import { LoginComponent } from "./authentication/login/login.component";

@NgModule({
    declarations: [LoginComponent, ForgotPasswordComponent],
    imports: [CommonModule],
})
export class CoreModule {}
