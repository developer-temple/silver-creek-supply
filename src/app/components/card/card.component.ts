import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, Renderer2 } from '@angular/core';
import { Colors } from 'src/app/lib/enums';

@Component({
  selector: 'scs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {
  @ViewChild('card', { static: false }) public cardRef: ElementRef;

  @Input() public bgColor: Colors | string = null;
  @Input() public flex: string = null;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {}

  public ngAfterViewInit(): void {
    if (this.cardRef && this.cardRef.nativeElement) {
      const el = this.cardRef.nativeElement;
      if (this.bgColor) {
        this.renderer.setStyle(el, 'background-color', this.bgColor);
      }
      if (this.flex) {
        this.renderer.setStyle(el, 'flex-basis', this.flex);
      }
    }
  }
}
