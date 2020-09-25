import { Injectable } from '@angular/core';
import { AppService } from 'src/app/lib/app.service';
import { ViewerItem, Product, Service, HomeAboutSectionContent, HomeTestimonialsContent, HomeAnnouncementsContent, HomeFeaturesContent, HomeContactContent, HomeWeatherSection } from 'src/app/lib/types';

@Injectable()
export class HomeViewmodelService {
  public get productsViewerItems(): ViewerItem[] {
    const products: Product[] = this.app.products;
    const array = [];
    products.forEach(p => {
      const item: ViewerItem = {
        imagePath: p.imagePath,
        heading: p.name,
        body: p.description,
      };
      array.push(item);
    });
    return array;
  }

  public get servicesViewerItems(): ViewerItem[] {
    const services: Service[] = this.app.services;
    const array = [];
    services.forEach(s => {
      const item: ViewerItem = {
        imagePath: s.imagePath,
        heading: s.name,
        body: s.description,
      };
      array.push(item);
    });
    return array;
  }

  public get about(): HomeAboutSectionContent {
    return this.app.homeAboutSection;
  }

  public get testimonials(): HomeTestimonialsContent {
    return this.app.homeTestimonialsSection;
  }

  public get announcements(): HomeAnnouncementsContent {
    return this.app.homeAnnouncementsSection;
  }

  public get features(): HomeFeaturesContent {
    return this.app.homeFeaturesSection;
  }

  public get weather(): HomeWeatherSection {
    return this.app.homeWeatherSection;
  }

  public get stocks(): HomeWeatherSection {
    return this.app.homeStocksSection;
  }

  public get contact(): HomeContactContent {
    return this.app.homeContactSection;
  }

  public get featuredProducts(): Product[] {
    return this.app.products.slice(0, 3);
  }

  public get heroHeight(): string {
    return `${window.innerHeight - 140}px`;
  }

  constructor(private app: AppService) { }

  public log(): void {
    console.log({
      msg: 'home vm',
      products: this.productsViewerItems,
      services: this.servicesViewerItems
    });
  }
}
