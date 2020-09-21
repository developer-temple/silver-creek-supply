import { Component, OnInit, Input, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { SectionTypes } from 'src/app/lib/enums';

@Component({
  selector: 'scs-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements AfterViewInit {
  @ViewChild('section', { static: false }) public sectionRef: ElementRef;

  @Input() public type: SectionTypes = SectionTypes.DEFAULT;
  @Input() public heroHeight: string = '100vh';
  @Input() public bgColor: string = null;
  @Input() public bgUrl: string = null;

  public sectionTypes: typeof SectionTypes = SectionTypes;

  constructor(private renderer: Renderer2) { }

  public ngAfterViewInit(): void {
    if (this.sectionRef && this.sectionRef.nativeElement) {
      const el = this.sectionRef.nativeElement;
      switch (this.type) {
        case SectionTypes.HERO:
          this.renderer.setStyle(el, 'width', '100vw');
          this.renderer.setStyle(el, 'height', this.heroHeight);
          break;
        case SectionTypes.HERO_RELATIVE:
          this.renderer.addClass(el, 'relative');
          this.renderer.setStyle(el, 'width', '100vw');
          this.renderer.setStyle(el, 'height', this.heroHeight);
          break;
        case SectionTypes.RELATIVE:
          this.renderer.addClass(el, 'relative');
          this.renderer.addClass(el, 'default');
          break;
        case SectionTypes.WIDE:
          this.renderer.addClass(el, 'wide');
          break;
        default:
          this.renderer.setStyle(el, 'padding', '5rem 0');
          this.renderer.addClass(el, 'default');
          break;
      }

      if (this.bgColor) {
        this.renderer.setStyle(el, 'background-color', this.bgColor);
      }

      if (this.bgUrl) {
        this.renderer.setStyle(el, 'background-image', `url("${this.bgUrl}")`);
        this.renderer.addClass(el, 'bg-image');
      }
    }
  }
}
