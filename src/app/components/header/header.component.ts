import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/lib/app.service';

@Component({
  selector: 'scs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public app: AppService) { }
  public ngOnInit(): void { }
}
