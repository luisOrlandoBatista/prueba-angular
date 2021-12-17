import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {wizardAnimation} from "../animations/wizard-animation";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  animations: wizardAnimation
})
export class WizardComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required)
  });
  step: number = 0;
  isVisitedStep0: boolean = true;
  isVisitedStep1: boolean = false;
  isVisitedStep2: boolean = false;
  isCompleted: boolean = false;
  stateWizard: string = 'step0';

  constructor() {
  }

  start() {
    this.step = 0;
    this.stateWizard = 'step0';
  }

  back() {
    if (this.step != 0) {
      this.step -= 1;
      this.stateWizard = 'step' + this.step;
    }
  }

  next() {
    if (this.step != 2) {
      this.step += 1;
      this.stateWizard = 'step' + this.step;
      if (this.step == 1) {
        this.isVisitedStep1 = true;
      } else if (this.step == 2) {
        this.isVisitedStep2 = true;
      }
    }
  }

  finish() {
    this.isCompleted = true;
    this.stateWizard = 'step' + this.step;
  }

  reset() {
    this.stateWizard = 'step0';
    this.form.reset();
    this.step = 0;
    this.isVisitedStep0 = true;
    this.isVisitedStep1 = false;
    this.isVisitedStep2 = false;
    this.isCompleted = false;
  }
}
