import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scs-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements AfterViewInit {
  @ViewChild('tile', { static: false }) public tile: ElementRef;

  @Input() public class: string = null;
  @Input() public bgUrl: string = null;
  @Input() public bgColor: string = null;
  @Input() public bgPosition: string = null;
  @Input() public relative: boolean = false;

  @Output() public onClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(private renderer: Renderer2) { }

  public ngAfterViewInit(): void {
    if (this.tile && this.tile.nativeElement) {
      const el = this.tile.nativeElement;
      if (this.bgUrl) {
        this.renderer.setStyle(el, 'background-image', `url("${this.bgUrl}")`);
        this.renderer.addClass(el, 'bg-image');
      }

      if (this.bgColor) {
        this.renderer.setStyle(el, 'background-color', this.bgColor);
      }

      if (this.class) {
        this.renderer.addClass(el, this.class);
      }

      if (this.bgPosition) {
        this.renderer.setStyle(el, 'background-position', this.bgPosition);
      }

      if (this.relative) {
        this.renderer.setStyle(el, 'position', 'relative');
      }
    }
  }

  public clickHandler(e: Event): void {
    this.onClick.emit(e);
  }
}
