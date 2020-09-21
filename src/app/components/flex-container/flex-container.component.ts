import { Component, OnInit, Renderer2, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'scs-flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss']
})
export class FlexContainerComponent implements AfterViewInit {
  @ViewChild('container', { static: false }) public container: ElementRef;

  @Input() public class: string = null;
  @Input() public height: string = null;
  @Input() public direction: string = 'row';
  @Input() public justify: string = null;
  @Input() public align: string = null;
  @Input() public gap: string = null;
  @Input() public wrap: boolean = false;

  constructor(private renderer: Renderer2) { }

  public ngAfterViewInit(): void {
    if (this.container && this.container.nativeElement) {
      const el = this.container.nativeElement;
      this.renderer.setStyle(el, 'flex-direction', this.direction);
      if (this.class) {
        this.renderer.addClass(el, this.class);
      }
      if (this.height) {
        this.renderer.setStyle(el, 'height', this.height);
      }
      if (this.justify) {
        this.renderer.setStyle(el, 'justify-content', this.justify);
      }
      if (this.align) {
        this.renderer.setStyle(el, 'align-items', this.align);
      }
      if (this.gap) {
        this.renderer.setStyle(el, 'gap', this.gap);
      }

      if (this.wrap) {
        this.renderer.setStyle(el, 'flex-wrap', 'wrap');
      }
    }
  }
}
