import { Component } from '@angular/core';
import { GaugeService } from '../../gauge/gauge.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finish',
  imports: [CommonModule],
  templateUrl: './finish.component.html',
  styleUrl: './finish.component.scss'
})
export class FinishComponent {
  constructor(private gauge: GaugeService) {}

  getGaugeValue(): number {
    return this.gauge.getGaugeValue();
  }
}
