import { Routes } from '@angular/router';
import { CounterComponent } from './features/counter/counter.component';
import { WeatherComponent } from './features/weather/weather.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full'
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'vatavaran',
    component: WeatherComponent
  }
];
