import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {WizardRoutingModule} from "./wizard-routing.module";
import {WizardComponent} from "./components/wizard/wizard.component";
import {ReactiveFormsModule} from "@angular/forms";
import {StepV2Component} from "./components/step-v2/step-v2.component";
import {WizardV2Component} from "./components/wizard-v2/wizard-v2.component";
import {WizardTemplateComponent} from "./components/wizard-template/wizard-template.component";

@NgModule({
  declarations: [WizardComponent, StepV2Component, WizardV2Component, WizardTemplateComponent],
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
