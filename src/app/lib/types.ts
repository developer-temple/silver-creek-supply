interface ViewerItem {
  imagePath: string;
  heading: string;
  body: string;
}

interface Product {
  name: string;
  description: string;
  summary: string;
  imagePath: string;
}

interface Service {
  name: string;
  description: string;
  summary: string;
  imagePath: string;
}

interface Company {
  phoneNumber: string;
  address: string;
  hours: string;
}

interface HomeAboutSectionContent {
  heading: string;
  content: string[];
  imagePath: string;
}

interface HomeTestimonialsContent {
  heading: string;
  items: Testimonial[];
}

interface Testimonial {
  body: string;
  author: string;
  avatarPath?: string;
}

interface Announcement {
  title: string;
  body: string;
  date: Date;
}

interface HomeAnnouncementsContent {
  heading: string;
  items: Announcement[];
}

interface HomeFeaturesContent {
  heading: string;
}

interface HomeWeatherSection {
  heading: string;
}

interface HomeStocksSection {
  heading: string;
}

interface HomeContactContent {
  heading: string;
}

export {
  ViewerItem,
  Product,
  Service,
  Company,
  HomeAboutSectionContent,
  HomeTestimonialsContent,
  HomeAnnouncementsContent,
  HomeFeaturesContent,
  HomeWeatherSection,
  HomeStocksSection,
  HomeContactContent,
  Testimonial,
  Announcement
};
