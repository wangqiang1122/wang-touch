import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// 可注入的
@Injectable({
  providedIn: 'root' // 根的路径
})
export class observeService {

  constructor(private http: HttpClient) { }

  public observe = {
    emit: function (name,val?) {
      console.log('emit执行')
      this.cache[name](val)
    },
    on: function (name,callback?) {
      this.cache[name] = callback;
    },
    cache: { // 缓存

    }
  }
}
