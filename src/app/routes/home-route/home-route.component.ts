import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { SectionTypes, Colors, HomePopupContexts } from 'src/app/lib/enums';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { ViewerItem, Product } from 'src/app/lib/types';
import { HomeViewmodelService } from './home-viewmodel.service';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/lib/app.service';

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

  public getBgUrl(imagePath: string): string {
    return `url("${imagePath}")`;
  }

  constructor(public vm: HomeViewmodelService) { }



  public ngOnInit(): void {

  }
}
