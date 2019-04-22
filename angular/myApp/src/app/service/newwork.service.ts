import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// 可注入的
@Injectable({
  providedIn: 'root' // 根的路径
})
export class NewworkService {

  constructor(private http: HttpClient) { }
  public doLogin() {
    return this.http.get('http://hq.sinajs.cn/list=CFF_RE_IF1307,TA0,M0,CFF_RE_IF1306,RB1309,M1309,SR1309,TA1309,Y1309,P1309,C1309,FG1309,WS1309,A1309,L1309,CF1309,CU1303')
  }
}
