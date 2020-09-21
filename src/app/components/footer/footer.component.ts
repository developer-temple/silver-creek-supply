import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentYear: string = ''

  constructor() { }

  public ngOnInit(): void {
    this.currentYear = new Date().getFullYear().toString();
  }
}
