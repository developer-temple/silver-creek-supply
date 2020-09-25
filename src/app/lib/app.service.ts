import { Injectable } from '@angular/core';
import { faInfo, faExternalLinkAlt, faAt, faChevronLeft, faChevronRight, faPhone, faCloud, faSun, faCloudRain, faCloudShowersHeavy, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Product, Service, HomeAboutSectionContent, HomeTestimonialsContent, HomeAnnouncementsContent, HomeFeaturesContent, HomeContactContent, HomeWeatherSection, HomeStocksSection, Company } from './types';

export const nameToIconsMap: Map<string, any> = new Map<string, any>([
  [ 'info', faInfo ],
  [ 'details', faExternalLinkAlt ],
  [ 'at', faAt ],
  [ 'decrement', faChevronLeft ],
  [ 'increment', faChevronRight ],
  [ 'facebook', faFacebook ],
  [ 'twitter', faTwitter ],
  [ 'instagram', faInstagram ],
  [ 'phone', faPhone ],
  [ 'cloud', faCloud ],
  [ 'sun', faSun ],
  [ 'sunCloud', faCloudSun ],
  [ 'rain', faCloudRain ],
  [ 'heavyRain', faCloudShowersHeavy ]
]);

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public emailTarget: string = 'developer.temple@gmail.com';

  public company: Company = {
    phoneNumber: '419-675-2972',
    address: '17259 County Road 115 Kenton, Ohio 43326',
    hours: 'Monday - Friday 8:00 - 4:30 | Weekends Seasonal Hours'
  }

  public products: Product[] = [
    {
      name: 'Test Product',
      description: 'Test Product Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product Summary',
      imagePath: 'assets/images/bottle1.jpg'
    },
    {
      name: 'Test Product 2',
      description: 'Test Product 2 Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product 2 Summary',
      imagePath: 'assets/images/bottle2.jpg'
    },
    {
      name: 'Test Product',
      description: 'Test Product Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product Summary',
      imagePath: 'assets/images/bottle1.jpg'
    },
    {
      name: 'Test Product 2',
      description: 'Test Product 2 Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product 2 Summary',
      imagePath: 'assets/images/bottle2.jpg'
    },
    {
      name: 'Test Product',
      description: 'Test Product Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product Summary',
      imagePath: 'assets/images/bottle1.jpg'
    },
    {
      name: 'Test Product 2',
      description: 'Test Product 2 Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product 2 Summary',
      imagePath: 'assets/images/bottle2.jpg'
    },
    {
      name: 'Test Product',
      description: 'Test Product Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product Summary',
      imagePath: 'assets/images/bottle1.jpg'
    },
    {
      name: 'Test Product 2',
      description: 'Test Product 2 Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product 2 Summary',
      imagePath: 'assets/images/bottle2.jpg'
    },
    {
      name: 'Test Product',
      description: 'Test Product Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product Summary',
      imagePath: 'assets/images/bottle1.jpg'
    },
    {
      name: 'Test Product 2',
      description: 'Test Product 2 Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product 2 Summary',
      imagePath: 'assets/images/bottle2.jpg'
    },
    {
      name: 'Test Product',
      description: 'Test Product Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product Summary',
      imagePath: 'assets/images/bottle1.jpg'
    },
    {
      name: 'Test Product 2',
      description: 'Test Product 2 Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product 2 Summary',
      imagePath: 'assets/images/bottle2.jpg'
    },
    {
      name: 'Test Product',
      description: 'Test Product Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product Summary',
      imagePath: 'assets/images/bottle1.jpg'
    },
    {
      name: 'Test Product 2',
      description: 'Test Product 2 Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product 2 Summary',
      imagePath: 'assets/images/bottle2.jpg'
    },
    {
      name: 'Test Product',
      description: 'Test Product Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product Summary',
      imagePath: 'assets/images/bottle1.jpg'
    },
    {
      name: 'Test Product 2',
      description: 'Test Product 2 Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product 2 Summary',
      imagePath: 'assets/images/bottle2.jpg'
    },
    {
      name: 'Test Product',
      description: 'Test Product Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product Summary',
      imagePath: 'assets/images/bottle1.jpg'
    },
    {
      name: 'Test Product 2',
      description: 'Test Product 2 Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product 2 Summary',
      imagePath: 'assets/images/bottle2.jpg'
    },
    {
      name: 'Test Product',
      description: 'Test Product Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product Summary',
      imagePath: 'assets/images/bottle1.jpg'
    },
    {
      name: 'Test Product 2',
      description: 'Test Product 2 Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product 2 Summary',
      imagePath: 'assets/images/bottle2.jpg'
    },
    {
      name: 'Test Product',
      description: 'Test Product Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product Summary',
      imagePath: 'assets/images/bottle1.jpg'
    },
    {
      name: 'Test Product 2',
      description: 'Test Product 2 Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product 2 Summary',
      imagePath: 'assets/images/bottle2.jpg'
    },
    {
      name: 'Test Product',
      description: 'Test Product Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product Summary',
      imagePath: 'assets/images/bottle1.jpg'
    },
    {
      name: 'Test Product 2',
      description: 'Test Product 2 Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Product 2 Summary',
      imagePath: 'assets/images/bottle2.jpg'
    }
  ];

  public services: Service[] = [
    {
      name: 'Test Service',
      description: 'Test Service Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a.',
      summary: 'Test Service Summary',
      imagePath: 'assets/images/bottle2.jpg'
    }
  ]

  public homeAboutSection: HomeAboutSectionContent = {
    heading: 'A Little About Us...',
    content: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.`,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.`,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.`
    ],
    imagePath: 'assets/images/couple.jpg'
  }

  public homeTestimonialsSection: HomeTestimonialsContent = {
    heading: 'Some Of Our Beloved Customers...',
    items: [
      {
        author: 'Bill',
        body: 'Semper quis lectus nulla at volutpat diam ut venenatis tellus. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.',
        avatarPath: 'assets/images/avatar1.jpg'
      },
      {
        author: 'Sally',
        body: 'Ultricies mi eget mauris pharetra et. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Nunc sed velit dignissim sodales ut eu sem integer.',
        avatarPath: 'assets/images/avatar2.jpg'
      },
      {
        author: 'James',
        body: 'Est placerat in egestas erat imperdiet sed euismod nisi. Erat pellentesque adipiscing commodo elit at. Ultricies integer quis auctor.',
        avatarPath: 'assets/images/avatar3.jpg'
      },
      {
        author: 'Rachel',
        body: 'Semper quis lectus nulla at volutpat diam ut venenatis tellus. Cabitasse platea dictumst quisque sagittis purus sit. Sit amet venenatis urna cursus eget nunc scelerisque.'
      },
      {
        author: 'Davey',
        body: 'Ultricies mi eget mauris pharetra et. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Nunc sed velit dignissim sodales ut eu sem integer.'
      },
      {
        author: 'Susan',
        body: 'Est placerat in egestas erat imperdiet sed euismod nisi. Erat pellentesque adipiscing commodo elit at. Ultricies integer quis auctor.'
      }
    ]
  }

  public homeAnnouncementsSection: HomeAnnouncementsContent = {
    heading: 'Some Announcements...',
    items: [
      {
        title: 'Title 1',
        body: 'Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Turpis egestas pretium aenean pharetra. Vitae semper quis lectus nulla at volutpat diam ut venenatis.',
        date: new Date()
      },
      {
        title: 'Title 2',
        body: 'Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Turpis egestas pretium aenean pharetra. Vitae semper quis lectus nulla at volutpat diam ut venenatis.',
        date: new Date()
      },
      {
        title: 'Title 3',
        body: 'Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Turpis egestas pretium aenean pharetra. Vitae semper quis lectus nulla at volutpat diam ut venenatis.',
        date: new Date()
      },
    ]
  }

  public homeFeaturesSection: HomeFeaturesContent = {
    heading: 'Featured Products...'
  }

  public homeWeatherSection: HomeWeatherSection = {
    heading: 'Something To Talk About...'
  }

  public homeStocksSection: HomeStocksSection = {
    heading: 'Taking Stock...'
  }

  public homeContactSection: HomeContactContent = {
    heading: 'Get In Touch...'
  }

  constructor() { }
}
