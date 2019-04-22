import { Directive, Input, HostListener, ElementRef } from '@angular/core';

// 装饰器
@Directive({
  selector: '[appMydirective]'
})
// ElementRef获取dom的指令
export class MydirectiveDirective {
  // 注解
  @Input() appMydirective: any;
  public el: any;
  // 这个生命周期有点像vue beforecreated钩子函数
  constructor(el: ElementRef) {
    console.log(this)
    console.log(this.appMydirective);
    this.el = el
  }
  // 监听装饰器
  @HostListener('click')
  onclick() {
    console.log(this.appMydirective);
    console.log(this.el)
  }
}
