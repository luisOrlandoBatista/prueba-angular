import { Injectable } from '@angular/core';
import { timer, Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export class Reloj {
    hour!: number;
    minutes!: string;
    amPm!: string;
    dayOfTheWeek!: string;
    dayAndMonth!: string;
    second!: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClockCurrentTimeService {
    clock: Observable<Date>;
    infoDate = new Subject<Reloj>();
    reloj!: Reloj;
    ampm!: string;
    hours!: number;
    minute!: string;
    weekDay!: string;
    months!: string;

    constructor() {
        this.clock = timer(0, 1000).pipe(map(t => new Date()), shareReplay(1));
    }

    getInfoReloj(): Observable<Reloj> {
        this.clock.subscribe(t => {
            this.hours = t.getHours() % 12;
            this.hours = this.hours ? this.hours : 12;
            this.reloj = {
                hour: this.hours,
                minutes: (t.getMinutes() < 10) ? '0' + t.getMinutes() : t.getMinutes().toString(),
                amPm: t.getHours() > 11 ? 'PM' : 'AM',
                dayAndMonth: t.toLocaleString('es-ES', { day: '2-digit', month: 'long' }).replace('.', '').replace('-', ' '),
                dayOfTheWeek: t.toLocaleString('es-ES', { weekday: 'long' }).replace('.', ''),
                second: t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds().toString()
            };
            this.infoDate.next(this.reloj);
        });
        return this.infoDate.asObservable();
    }
}
