import { Component, Input, AfterViewInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Colors } from 'src/app/lib/enums';

@Component({
  selector: 'scs-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements AfterViewInit {
  @ViewChild('container', { static: false }) public containerRef: ElementRef;
  @Input() public color: Colors = Colors.DEFAULT;

  constructor(private renderer: Renderer2) { }

  public ngAfterViewInit(): void {
    if (this.containerRef && this.containerRef.nativeElement) {
      const el = this.containerRef.nativeElement;
      this.renderer.setStyle(el, 'background-color', this.color);
    }
  }
}
