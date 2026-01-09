

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Counter } from '../../models/counter.model';
import { CounterService } from '../../services/counter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  imports: [CommonModule],
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counters$: Observable<Counter[]>;

  constructor(private counterService: CounterService) {
    this.counters$ = this.counterService.counters$;
  }

  add() {
    this.counterService.addCounter();
  }

  reset() {
    this.counterService.reset();
  }

  increment(id: number) {
    this.counterService.increment(id);
  }

  decrement(id: number) {
    this.counterService.decrement(id);
  }

  delete(id: number) {
    this.counterService.delete(id);
  }
}

