import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scs-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Output() public onOpened: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onClosed: EventEmitter<any> = new EventEmitter<any>();

  public visibility: boolean = false;

  constructor() { }
  public ngOnInit(): void {}

  public open(): void {
    this.visibility = true;
    this.onOpened.emit();
  }

  public close(): void {
    this.visibility = false;
    this.onClosed.emit();
  }

  public toggle(): void {
    this.visibility ? this.close(): this.open();
  }

  public dontClose(e: Event): void {
    e.stopPropagation();
  }
}
