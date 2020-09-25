import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private lat = 40.6470;
  private lon = -83.6097;
  constructor(private http: HttpClient) { }

  public getCurrentWeather(location: string): Observable<any> {
    location.replace(' ', '');
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${environment.weatherAPIKey}&units=imperial`);
  }

  public getWeather(): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&appid=${environment.weatherAPIKey}&units=imperial`);
  }

  public getIconUrl(id: string): string {
    return `http://openweathermap.org/img/w/${id}.png`;
  }
}
