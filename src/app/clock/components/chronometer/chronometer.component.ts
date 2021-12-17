import {Component, OnDestroy, OnInit} from "@angular/core";
import {interval, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.scss']
})
export class ChronometerComponent implements OnDestroy {
  hh: string = '00';
  mm: string = '00';
  ss: string = '00';
  private subscription!: Subscription;
  isSubscriptionActive: boolean = false;

  constructor() {
  }

  start() {
    if (!this.isSubscriptionActive) {
      this.isSubscriptionActive = true;
      this.subscription = interval(1000).subscribe(() => {
        let ss = Number(this.ss);
        if (ss < 9) {
          ss += 1;
          this.ss = '0' + ss;
        } else {
          if (ss == 59) {
            ss = 0;
            this.ss = '00';

            let mm = Number(this.mm);
            if (mm < 9) {
              mm += 1;
              this.mm = '0' + mm;
            } else {
              if (mm == 59) {
                mm = 0;
                this.mm = '00';

                let hh = Number(this.hh);
                if (hh < 9) {
                  hh += 1;
                  this.hh = '0' + hh;
                } else {
                  if (hh == 23) {
                    hh = 0;
                    this.hh = '00';
                  } else {
                    hh += 1;
                    this.hh = hh.toString();
                  }
                }
              } else {
                mm += 1;
                this.mm = mm.toString();
              }
            }
          } else {
            ss += 1;
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
    this.hh = '00';
    this.mm = '00';
    this.ss = '00';
  }

  ngOnDestroy(): void {
    if (this.isSubscriptionActive) {
      this.subscription.unsubscribe();
    }
  }
}
