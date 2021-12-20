import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnDestroy
} from '@angular/core';
import {StepV2Component} from "../step-v2/step-v2.component";
import {StepV2Service} from "../../services/step-v2-service";

@Component({
  selector: 'wizard',
  templateUrl: './wizard-v2.component.html',
  styleUrls: ['./wizard-v2.component.scss']
})
export class WizardV2Component implements AfterContentInit, OnDestroy {
  items: any;
  currentStepIndex: number = 0;
  currentStep!: string;
  navWidth!: number;
  @ContentChildren(StepV2Component) steps!: QueryList<StepV2Component>;

  constructor(private stepV2Service: StepV2Service) {
  }

  navClicked(id: number) {
    this.items[this.currentStepIndex].step.activeStep = false;
    this.items[this.currentStepIndex].step.isVisitedStep = true;
    this.currentStepIndex = id;
    this.currentStep = this.items[id];
    this.items[this.currentStepIndex].step.activeStep = true;
    this.setAllVisited();
  }

  setAllVisited() {
    let count = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].step.isVisitedStep) {
        count++;
      }
    }
    if (this.items.length == count || (this.items.length - count == 1 && !this.items[this.items.length - 1].step.isVisitedStep)) {
      this.stepV2Service.isAllVisitedStep.next(true);
    }
  }

  ngAfterContentInit() {
    let i = 0;
    this.items = this.steps.map((r) => {
      return {step: r, id: i++};
    });
    this.items[this.currentStepIndex].step.activeStep = true; // setting default step as active step.
    this.items[0].step.firstStep = true;
    this.items[this.items.length - 1].step.lastStep = true;
    this.navWidth = 100 / this.items.length;
    this.steps.forEach((r) => {
      r.onBack.subscribe((title: StepV2Component) => {
        if (this.currentStepIndex === 0) {
          console.log("you cannot go back from here!!");
        } else {
          this.items[this.currentStepIndex].step.activeStep = false;
          this.items[this.currentStepIndex].step.isVisitedStep = true;
          this.currentStepIndex -= 1;
          this.currentStep = this.items[this.currentStepIndex];
          this.items[this.currentStepIndex].step.activeStep = true;
          this.setAllVisited();
        }
      });
      r.onNext.subscribe((title: StepV2Component) => {
        if (this.currentStepIndex == this.items.length - 1) {
          console.log("Finished");
        } else {
          this.items[this.currentStepIndex].step.activeStep = false;
          this.items[this.currentStepIndex].step.isVisitedStep = true;
          this.currentStepIndex += 1;
          this.currentStep = this.items[this.currentStepIndex];
          this.items[this.currentStepIndex].step.activeStep = true;
          this.setAllVisited();
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.stepV2Service.isAllVisitedStep.next(false);
  }
}
