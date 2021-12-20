import {NgModule} from "@angular/core";

import {Routes, RouterModule} from "@angular/router";
import {WizardComponent} from "./components/wizard/wizard.component";
import {WizardTemplateComponent} from "./components/wizard-template/wizard-template.component";

export const routes: Routes = [
  {
    path: '', children: [
      {path: 'wizard1', component: WizardComponent},
      {path: 'wizard2', component: WizardTemplateComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class WizardRoutingModule {
}
