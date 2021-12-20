import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StepV2Service {
  isAllVisitedStep = new BehaviorSubject<boolean>(false);
}
