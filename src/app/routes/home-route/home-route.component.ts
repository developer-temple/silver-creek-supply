import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { SectionTypes, Colors, HomePopupContexts } from 'src/app/lib/enums';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { ViewerItem, Product } from 'src/app/lib/types';
import { HomeViewmodelService } from './home-viewmodel.service';
import { Subscription } from 'rxjs';
import { AppService, nameToIconsMap } from 'src/app/lib/app.service';
import { WeatherService } from 'src/app/lib/weather.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'scs-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss'],
  providers: [ HomeViewmodelService ]
})
export class HomeRouteComponent implements OnInit {
  @ViewChild('productsPopup', {static: false}) public productsPopup: PopupComponent;
  @ViewChild('servicesPopup', {static: false}) public servicesPopup: PopupComponent;

  public sectionTypes: typeof SectionTypes = SectionTypes;
  public colors: typeof Colors = Colors;

  public weatherData: any = null;

  constructor(public vm: HomeViewmodelService, private weather: WeatherService) { }

  public ngOnInit(): void {
    this.setWeatherData();
  }

  public getBgUrl(imagePath: string): string {
    return `url("${imagePath}")`;
  }

  private setWeatherData() {
    this.weather.getWeather().subscribe({
      next: (data: any) => {
        console.log(data);
        this.weatherData = data;
      },
      error: (err: HttpErrorResponse) => {
        console.log('set weather data err', err);
      }
    });
  }

  public getIcon(description: string) {
    const desc = description.toLowerCase().trim();
    if (desc.includes('clouds') && desc.includes('broken')) {
      return nameToIconsMap.get('sunCloud');
    } else if (desc.includes('clouds')) {
      return nameToIconsMap.get('cloud');
    } else if (desc.includes('clear')) {
      return nameToIconsMap.get('sun');
    } else if (desc.includes('rain') && desc.includes('heavy')) {
      return nameToIconsMap.get('heavyRain');
    } else if (desc.includes('rain') ) {
      return nameToIconsMap.get('rain');
    } else {
      return nameToIconsMap.get('at');
    }
  }

  public getDateString(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString();
  }

  public getTempString(temp: number) {
    return Math.round(temp).toString();
  }

  public getDayOfWeek(timestamp) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    const index = new Date(timestamp * 1000).getDay();
    if (index >= 0 && index < days.length) {
      return days[index];
    }
  }
}
