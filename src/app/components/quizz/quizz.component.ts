import { Component } from '@angular/core';
import { QUEST1, QUEST10, QUEST2, QUEST3, QUEST4, QUEST5, QUEST6, QUEST7, QUEST8, QUEST9, Question } from '../../utils/question';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GaugeService } from '../../gauge/gauge.service';

@Component({
  selector: 'app-quizz',
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})
export class QuizzComponent {

  index: number = 0;
  showAnswers: boolean = false;
  questions: Question[] = [QUEST1, QUEST2, QUEST3, QUEST4, QUEST5, QUEST6, QUEST7, QUEST8, QUEST9, QUEST10];
  intervalGauge: number = 0;

  constructor(private router: Router, private gauge: GaugeService) {
    this.gauge.setGaugeValue(0);
    this.intervalGauge = Math.round(100 / this.questions.length);
  }

  getQuestion(): Question | null {
    if(this.index < this.questions.length) {
      return this.questions[this.index];
    }
    else return null;
  }

  onOptionClick(i: number): void {
    if(!this.showAnswers && this.getQuestion()?.isGoodAnswer(i)) {
      this.increaseGauge();
    }
    this.showAnswers = true;
  }

  nextQuestion(): void {
    if(this.index < this.questions.length - 1) {
      this.index++;
      this.showAnswers = false;
    }
    else {
      this.goToFinish();
    }
  }

  increaseGauge() {
    this.gauge.increaseGauge(this.intervalGauge);

    if(this.index >= this.questions.length - 1) {
      this.gauge.setGaugeValue(100);
    }
  }

  getGaugeValue(): number {
    return this.gauge.getGaugeValue();
  }
  
  getGaugeColor() {
    const gaugeValue: number = this.gauge.getGaugeValue();
    if (gaugeValue < 30) {
      return 'red';
    } else if (gaugeValue <= 70) {
      return 'orange';
    } else if (gaugeValue < 100) {
      return 'green';
    } else {
      return '#8A2BE2';
    }
  }

  goToFinish() {
    this.router.navigate(['/finish']);
  }
}
