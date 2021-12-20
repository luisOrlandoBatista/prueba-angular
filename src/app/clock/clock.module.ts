import { NgModule } from "@angular/core";
import { ClockRoutingModule } from "./clock-routing.module";
import { ChronometerComponent } from "./components/chronometer/chronometer.component";
import { ClockCurrentTimeComponent } from "./components/clock-current-time/clock-current-time.component";
import { CountDownComponent } from "./components/countdown/countdown.component";
import {CommonModule} from "@angular/common";
import {ClockComponent} from "./components/clock/clock.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [ClockComponent, ClockCurrentTimeComponent, CountDownComponent, ChronometerComponent],
  imports: [
    ClockRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
    entryComponents: [],
    exports: [],
    providers: [],
})
export class ClockModule { }
