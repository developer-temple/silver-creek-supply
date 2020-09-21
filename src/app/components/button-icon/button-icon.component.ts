import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

import { nameToIconsMap } from 'src/app/lib/app.service';

import { Colors } from 'src/app/lib/enums';

@Component({
  selector: 'scs-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent implements OnInit, AfterViewInit {
  @ViewChild('button', { static: false }) public buttonRef: ElementRef;
  @Input() public name: string = null;
  @Input() public color: Colors | string = null;
  @Output() public onClick: EventEmitter<Event> = new EventEmitter<Event>();

  public icon: any = null;

  constructor(private renderer: Renderer2) { }

  public ngOnInit(): void {
    let result = null;
    if (this.name) {
      result = nameToIconsMap.get(this.name);
      if (result) {
        this.icon = result;
      }
    }
  }

  public ngAfterViewInit(): void {
    if (this.buttonRef && this.buttonRef.nativeElement) {
      const el = this.buttonRef.nativeElement;
      if (this.color) {
        this.renderer.setStyle(el, 'color', this.color)
      }
    }
  }

  public clickHandler(e: Event): void {
    e.stopPropagation();
    this.onClick.emit(e);
  }
}
