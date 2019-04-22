import { Component, OnInit } from '@angular/core';
import { ActivatedRoute as route, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-index-component',
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponentComponent implements OnInit {

  constructor( public route:route, public location: Location,public router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParamMap.get('id'))
  }

  goBack() {
    this.location.back();
  }
  forward() {
    this.location.forward();
  }
  navigate() {
    this.router.navigateByUrl('/home')
  }
}
