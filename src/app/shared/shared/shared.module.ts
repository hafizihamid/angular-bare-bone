import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@NgModule({
    declarations: [FooterComponent, HeaderComponent],
    exports: [FooterComponent, HeaderComponent],
    imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}