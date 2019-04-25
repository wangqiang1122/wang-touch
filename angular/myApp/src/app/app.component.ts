import { Component, OnInit } from '@angular/core';
import { observeService } from './service/emit';
// 装饰器 又叫注解 可以当作有一定功能的函数
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private observe: observeService) {}
  title = 'myApp';
  isAlert: boolean = false;
  ngOnInit() {
    this.observe.observe.on('err',()=>{
      this.isAlert = true;
    })
  }

}
