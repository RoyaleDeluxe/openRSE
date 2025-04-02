import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaugeService {
  gaugeValue: number = 0;
  
  increaseGauge(intervalGauge: number) {
    if (this.gaugeValue < 100) {
      this.gaugeValue += intervalGauge;
    }
  }

  getGaugeValue(): number {
    return this.gaugeValue;
  }

  setGaugeValue(value: number) {
    this.gaugeValue = value;
  }
  

  constructor() { }
}
