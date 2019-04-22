import { Component, OnInit } from '@angular/core';

import { NewworkService } from '../service/newwork.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private server: NewworkService) { }

  ngOnInit() {
    this.server.doLogin().subscribe((res)=>{
      console.log(res)
    },(err)=>{
      console.log(err)
    })
  }

}
