import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RightsRoutingModule } from "./rights-routing.module";
import { RightsComponent } from "./rights.component";

@NgModule({
    declarations: [RightsComponent],
    imports: [
        CommonModule,
        RightsRoutingModule
    ]
})
export class RightsModule {}