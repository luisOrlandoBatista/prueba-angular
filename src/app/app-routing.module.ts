import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/clock/clock-current-time" },
  {
    path: "clock",
    loadChildren: () =>
      import("./clock/clock.module").then(
        (m) => m.ClockModule
      ),
  },
  {
    path: "wizard",
    loadChildren: () =>
      import("./wizard/wizard.module").then(
        (m) => m.WizardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
