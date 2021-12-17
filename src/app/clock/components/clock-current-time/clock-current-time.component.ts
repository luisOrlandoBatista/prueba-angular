import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {ClockCurrentTimeService} from "../../services/clock-current-time.service";

@Component({
  selector: 'app-clock-current-time',
  templateUrl: './clock-current-time.component.html',
  styleUrls: ['./clock-current-time.component.scss']
})
export class ClockCurrentTimeComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  hour!: number;
  minutes!: string;
  day!: string;
  date!: string;
  amPm!: string;
  seconds!: string;
  isSubscriptionActive: boolean = false;

  constructor(private clockCurrentTimeService: ClockCurrentTimeService) {
  }

  ngOnInit(): void {
    this.subscription = this.clockCurrentTimeService.getInfoReloj().subscribe(x => {
      this.isSubscriptionActive =  true;
      this.hour = x.hour;
      this.minutes = x.minutes;
      this.day = x.dayOfTheWeek;
      this.date = x.dayAndMonth;
      this.amPm = x.amPm;
      this.seconds = x.second;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
