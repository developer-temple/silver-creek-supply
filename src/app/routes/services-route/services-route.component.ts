import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'scs-services-route',
  templateUrl: './services-route.component.html',
  styleUrls: ['./services-route.component.scss']
})
export class ServicesRouteComponent implements OnInit {
  public serviceID: number = null;
  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.serviceID = parseInt(params.get('id'), 10);
   })
  }
}
