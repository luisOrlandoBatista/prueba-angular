import {Component, OnDestroy} from "@angular/core";
import {interval, Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-countdown',
    templateUrl: './countdown.component.html',
    styleUrls: ['./countdown.component.scss']
})
export class CountDownComponent implements OnDestroy {
  hh: any;
  mm: any;
  ss: any;

  form: FormGroup = new FormGroup({
    hour: new FormControl(0, [Validators.min(0), Validators.max(23)]),
    minutes: new FormControl(0, [Validators.min(0), Validators.max(59)]),
    second: new FormControl(0, [Validators.min(0), Validators.max(59)]),
  });
  private subscription!: Subscription;
  isSubscriptionActive: boolean = false;

  constructor() {
    this.reset();
  }

  apply() {
    this.reset();
  }

  start(): void {
    if (!this.isSubscriptionActive) {
      this.isSubscriptionActive = true;
      this.subscription = interval(1000).subscribe(() => {
        let ss = Number(this.ss);
        if (ss > 0 && ss <= 10) {
          ss -= 1;
          this.ss = '0' + ss;
        } else {
          if (ss == 0) {
            ss = 59;
            this.ss = ss;

            let mm = Number(this.mm);
            if (mm > 0 && mm <= 10) {
              mm -= 1;
              this.mm = '0' + mm;
            } else {
              if (mm == 0) {
                mm = 59;
                this.mm = mm;

                let hh = Number(this.hh);
                if (hh > 0 && hh <= 10) {
                  hh -= 1;
                  this.hh = '0' + hh;
                } else {
                  if (hh == 0) {
                    hh = 23;
                    this.hh = hh;
                  } else {
                    hh -= 1;
                    this.hh = hh.toString();
                  }
                }
              } else {
                mm -= 1;
                this.mm = mm.toString();
              }
            }
          } else {
            ss -= 1;
            this.ss = ss.toString();
          }
        }
      });
    }
  }

  pause() {
    if (this.isSubscriptionActive) {
      this.isSubscriptionActive = false;
      this.subscription.unsubscribe();
    }
  }

  reset() {
    if (this.isSubscriptionActive) {
      this.isSubscriptionActive = false;
      this.subscription.unsubscribe();
    }
    const hh = this.form.value.hour;
    const mm = this.form.value.minutes;
    const ss = this.form.value.second;

    this.hh = hh < 10 ? '0' + hh : hh;
    this.mm = mm < 10 ? '0' + mm : mm;
    this.ss = ss < 10 ? '0' + ss : ss;
  }

  ngOnDestroy(): void {
    if (this.isSubscriptionActive) {
      this.subscription.unsubscribe();
    }
  }
}
