import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {WizardRoutingModule} from "./wizard-routing.module";
import {WizardComponent} from "./components/wizard/wizard.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [WizardComponent],
  imports: [
    WizardRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  entryComponents: [],
  exports: [],
  providers: [],
})
export class WizardModule { }
