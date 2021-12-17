import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { ChronometerComponent } from "./components/chronometer/chronometer.component";
import { ClockCurrentTimeComponent } from "./components/clock-current-time/clock-current-time.component";
import { CountDownComponent } from "./components/countdown/countdown.component";
import {ClockComponent} from "./components/clock/clock.component";

export const routes: Routes = [
    {
        path: '', component: ClockComponent, children: [
            { path: '', redirectTo: 'clock-current-time', pathMatch: 'full' },
            { path: "clock-current-time", component: ClockCurrentTimeComponent },
            { path: "chronometer", component: ChronometerComponent },
            { path: "countdown", component: CountDownComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class ClockRoutingModule { }
