import { Component, OnInit, Input } from '@angular/core';
import { ViewerItem } from 'src/app/lib/types';
import { Router } from '@angular/router';
import { AppService } from 'src/app/lib/app.service';

@Component({
  selector: 'scs-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  @Input() public label: string = '';
  @Input() public items: ViewerItem[] = [];
  @Input() private _selectedIndex: number = 0;
  @Input() public baseDetailsPath: string = '';
  @Input() public baseEmailSubject: string = '';

  public get selectedIndex(): number {
    return this._selectedIndex;
  }

  constructor(private router: Router, private app: AppService) { }

  public ngOnInit(): void {
    this._selectedIndex = 0;
  }

  public decrement(): void {
    if (this._selectedIndex === 0) {
      this._selectedIndex = this.items.length - 1;
    } else {
      this._selectedIndex = this._selectedIndex - 1;
    }
  }

  public increment(): void {
    if (this._selectedIndex === this.items.length - 1) {
      this._selectedIndex = 0;
    } else {
      this._selectedIndex = this._selectedIndex + 1;
    }
  }

  public set(e: Event, index: number): void {
    e.stopPropagation();
    if (index < this.items.length) {
      this._selectedIndex = index;
    }
  }

  public getImagePath(item: ViewerItem): string {
    return `url("${item.imagePath}")`
  }

  public showDetails(): void {
    this.router.navigate([ this.baseDetailsPath, this._selectedIndex ])
  }

  public sendEmail(): void {
    const item = this.items[this._selectedIndex];
    if (item) {
      const subject = `${this.baseEmailSubject} ${item.heading}`;
      location.href = `mailto:${this.app.emailTarget}?subject=${subject}`;
    }
  }
}
