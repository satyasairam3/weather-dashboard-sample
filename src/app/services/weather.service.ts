import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEATHER_API } from '../features/weather/weather.constants';
import { Observable } from 'rxjs';
import { Weather, Forecast } from '../models/weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(
      `${WEATHER_API.BASE_URL}/weather?q=${city}&units=metric&appid=${WEATHER_API.API_KEY}`
    );
  }

  getForecast(city: string): Observable<Forecast> {
    return this.http.get<Forecast>(
      `${WEATHER_API.BASE_URL}/forecast?q=${city}&units=metric&appid=${WEATHER_API.API_KEY}`
    );
  }
}
