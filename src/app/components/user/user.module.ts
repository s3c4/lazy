import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslatePipeModule } from "src/app/pipes/translate.module";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

@NgModule({
    declarations: [UserComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        TranslatePipeModule
    ]
})
export class UserModule {}