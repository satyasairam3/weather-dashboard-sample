import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { Weather, Forecast } from '../../models/weather.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  city = '';
  error = '';

  locations: Weather[] = [];
  selectedForecast!: Forecast;
  selectedDetails?: Weather | null = null;

  constructor(private weatherService: WeatherService) {}

  addCity() {
    this.error = '';

    this.weatherService.getCurrentWeather(this.city).pipe(
      catchError(() => {
        this.error = 'Invalid city name';
        return of(null);
      })
    ).subscribe(data => {
      if (!data) return;

      this.locations.unshift(data);

      if (this.locations.length > 8) {
        this.locations.pop();
      }

      this.city = '';
    });
  }

  refreshCity(city: string) {
    this.weatherService.getCurrentWeather(city)
      .subscribe(updated => {
        const index = this.locations.findIndex(c => c.name === city);
        this.locations[index] = updated;
      });
  }

  deleteCity(city: string) {
    this.locations = this.locations.filter(c => c.name !== city);
  }

  clearAll() {
    this.locations = [];
    this.selectedForecast = undefined!;
  }

  loadForecast(city: string) {
    this.weatherService.getForecast(city)
      .subscribe(data => this.selectedForecast = data);

    // also fetch current weather details for the selected city
    this.weatherService.getCurrentWeather(city)
      .subscribe(data => this.selectedDetails = data);
  }
  
  getDailyForecasts(): any[] {
  if (!this.selectedForecast) return [];
  // pick one item per calendar day (e.g., first occurrence or the one at 12:00)
  const map = new Map<string, any>();
  for (const f of this.selectedForecast.list) {
    const day = f.dt_txt.split(' ')[0]; // 'YYYY-MM-DD'
    if (!map.has(day)) map.set(day, f);
  }
  return Array.from(map.values()).slice(0, 5);
}
}
