import { NgModule } from "@angular/core";
import { ClockRoutingModule } from "./clock-routing.module";
import { ChronometerComponent } from "./components/chronometer/chronometer.component";
import { ClockCurrentTimeComponent } from "./components/clock-current-time/clock-current-time.component";
import { CountDownComponent } from "./components/countdown/countdown.component";
import {CommonModule} from "@angular/common";
import {ClockComponent} from "./components/clock/clock.component";

@NgModule({
    declarations: [ClockComponent, ClockCurrentTimeComponent, CountDownComponent, ChronometerComponent],
    imports: [
        ClockRoutingModule,
        CommonModule
    ],
    entryComponents: [],
    exports: [],
    providers: [],
})
export class ClockModule { }
