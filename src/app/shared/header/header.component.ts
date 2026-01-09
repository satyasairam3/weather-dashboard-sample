import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  totalCounters = 0;

  constructor(private counterService: CounterService) {
    this.counterService.counters$.subscribe(data => {
      this.totalCounters = data.length;
    });
  }
}
