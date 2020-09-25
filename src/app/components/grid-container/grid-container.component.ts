import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'scs-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { static: false }) public containerRef: ElementRef<HTMLDivElement>;

  @Input() public columns: string = null;
  @Input() public rows: string = null;
  @Input() public gap: string = null;
  @Input() public columnGap: string = null;
  @Input() public rowGap: string = null;
  @Input() public padding: string = null;
  @Input() public flow: string = null;

  constructor(private renderer: Renderer2) { }

  public ngOnInit(): void { }

  public ngAfterViewInit(): void {
    if (this.containerRef && this.containerRef.nativeElement) {
      const el = this.containerRef.nativeElement;
      this.renderer.setStyle(el, 'display', 'grid');

      if (this.columns) {
        this.renderer.setStyle(el, 'grid-template-columns', this.columns);
      }

      if (this.rows) {
        this.renderer.setStyle(el, 'grid-template-rows', this.rows);
      }

      if (this.gap) {
        this.renderer.setStyle(el, 'gap', this.gap);
      }

      if (this.columnGap) {
        this.renderer.setStyle(el, 'column-gap', this.columnGap);
      }

      if (this.rowGap) {
        this.renderer.setStyle(el, 'row-gap', this.rowGap);
      }

      if (this.padding) {
        this.renderer.setStyle(el, 'padding', this.padding);
      }

      if (this.flow) {
        this.renderer.setStyle(el, 'grid-auto-flow', this.flow);
      }
    }
  }
}
