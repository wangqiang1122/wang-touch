import { Component, OnInit } from '@angular/core';
import { ActivatedRoute as Route} from "@angular/router";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  constructor(public route:Route) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'))
  }

}
