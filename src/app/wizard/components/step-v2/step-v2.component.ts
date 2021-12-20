import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { StepV2Service } from "../../services/step-v2-service";

@Component({
  selector: 'step',
  templateUrl: './step-v2.component.html',
  styleUrls: ['./step-v2.component.scss']
})
export class StepV2Component implements OnInit {
  @Input() title?: string;
  @Input() activeStep?: boolean = false;
  @Input() firstStep?: boolean = false;
  @Input() lastStep?: boolean = false;
  @Input() shouldEnter?: boolean = true;
  @Input() isVisitedStep?: boolean = false;
  @Output() onBack = new EventEmitter<this>();
  @Output() onNext = new EventEmitter<this>();
  isAllVisitedStep: boolean = false;

  constructor(private stepV2Service: StepV2Service) {}

  backClicked() {
    this.onBack.emit(this);
  }
  nextClicked(){
    this.onNext.emit(this);
  }
  ngOnInit() {
    this.stepV2Service.isAllVisitedStep.subscribe((value) => {
      this.isAllVisitedStep = value;
    });
  }
}
