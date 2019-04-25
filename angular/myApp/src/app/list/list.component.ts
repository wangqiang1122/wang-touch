import { Component, OnInit } from '@angular/core';

import { NewworkService } from '../service/newwork.service';
import {  observeService } from '../service/emit';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private server: NewworkService,private observe: observeService) { }

  ngOnInit() {
    console.log(this.server);
    this.server.doLogin().then((data)=>{
      console.log(data)
      if (data===1) {
        this.observe.observe.emit('err','1');
      }
    })
  }

}
