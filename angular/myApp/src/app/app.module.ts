import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MydirectiveDirective } from './directive/mydirective.directive';
import { IndexComponentComponent } from './index-component/index-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListComponent } from './list/list.component';

@NgModule({
  // 声明 组件放声明
  declarations: [
    AppComponent,
    MydirectiveDirective,
    IndexComponentComponent,
    HomeComponentComponent,
    ListComponent,
  ],
  //倒入 模块放倒入
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // 启动
})
export class AppModule { }
