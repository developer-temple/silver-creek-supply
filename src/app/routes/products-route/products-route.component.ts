import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'scs-products-route',
  templateUrl: './products-route.component.html',
  styleUrls: ['./products-route.component.scss']
})
export class ProductsRouteComponent implements OnInit {
  public productID: number = null;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productID = parseInt(params.get('id'), 10);
   })
  }
}
