import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./authentication/login.component";
import { ForgotPasswordComponent } from "./authentication/forgot-password/forgot-password.component";

@NgModule({
    declarations: [LoginComponent, ForgotPasswordComponent],
    imports: [CommonModule],
})
export class CoreModule {}
