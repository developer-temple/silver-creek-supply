import { Component, OnInit, Renderer2, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'scs-absolute-container',
  templateUrl: './absolute-container.component.html',
  styleUrls: ['./absolute-container.component.scss']
})
export class AbsoluteContainerComponent implements AfterViewInit {
  @ViewChild('container', { static: false }) public containerRef: ElementRef;

  @Input() public top: string = null;
  @Input() public left: string = null;
  @Input() public right: string = null;
  @Input() public bottom: string = null;
  @Input() public width: string = null;
  @Input() public height: string = null;
  @Input() public class: string = null;

  constructor(private renderer: Renderer2) { }

  public ngAfterViewInit(): void {
    if (this.containerRef && this.containerRef.nativeElement) {
      const el = this.containerRef.nativeElement;
      this.class ? this.renderer.addClass(el, this.class) : null;
      this.top ? this.renderer.setStyle(el, 'top', this.top) : null;
      this.left ? this.renderer.setStyle(el, 'left', this.left) : null;
      this.right ? this.renderer.setStyle(el, 'right', this.right) : null;
      this.bottom ? this.renderer.setStyle(el, 'bottom', this.bottom) : null;
      this.width ? this.renderer.setStyle(el, 'width', this.width) : null;
      this.top ? this.renderer.setStyle(el, 'height', this.height) : null;
    }
  }
}
