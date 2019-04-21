import { Component } from '@angular/core';
// 装饰器 又叫注解 可以当作有一定功能的函数
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
}
