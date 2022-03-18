import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgotPasswordComponent } from "./authentication/forgot-password/forgot-password.component";
import { LoginComponent } from "./authentication/login/login.component";
import { ResetPasswordComponent } from "./authentication/reset-password/reset-password.component";
import { SetPasswordComponent } from "./authentication/set-password/set-password.component";

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "forgot-password", component: ResetPasswordComponent },
    { path: "reset-password", component: ForgotPasswordComponent },
    { path: "set-password", component: SetPasswordComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoreRoutingModule {}
