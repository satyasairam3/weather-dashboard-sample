import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Counter } from '../models/counter.model';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counters: Counter[] = [];

  private counterSubject = new BehaviorSubject<Counter[]>([]);
  counters$ = this.counterSubject.asObservable();

  private id = 1;

  addCounter() {
    const newCounter: Counter = { id: this.id++, count: 0 };
    this.counters.push(newCounter);
    this.counterSubject.next([...this.counters]);
  }

  increment(id: number) {
    this.counters = this.counters.map(c =>
      c.id === id ? { ...c, count: c.count + 1 } : c
    );
    this.counterSubject.next([...this.counters]);
  }

  decrement(id: number) {
    this.counters = this.counters.map(c =>
      c.id === id ? { ...c, count: c.count - 1 } : c
    );
    this.counterSubject.next([...this.counters]);
  }

  delete(id: number) {
    this.counters = this.counters.filter(c => c.id !== id);
    this.counterSubject.next([...this.counters]);
  }

  reset() {
    this.counters = [];
    this.counterSubject.next([]);
  }
}
