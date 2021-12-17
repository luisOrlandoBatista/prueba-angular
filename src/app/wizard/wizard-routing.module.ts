import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import {WizardComponent} from "./components/wizard/wizard.component";

export const routes: Routes = [
  { path: '', component: WizardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class WizardRoutingModule { }
