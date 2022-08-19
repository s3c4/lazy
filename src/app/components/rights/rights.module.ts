import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RightsRoutingModule } from "./rights-routing.module";
import { RightsComponent } from "./rights.component";
import { TranslatePipeModule } from "src/app/pipes/translate.module";

@NgModule({
    declarations: [RightsComponent],
    imports: [
        CommonModule,
        RightsRoutingModule,
        TranslatePipeModule
    ]
})
export class RightsModule {}