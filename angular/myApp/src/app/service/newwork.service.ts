import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest } from "@angular/common/http";
import { tap, catchError} from "rxjs/operators";
import { Observable,of } from "rxjs"; //of关于
import { observeService } from './emit';

// 可注入的
@Injectable({
  providedIn: 'root' // 根的路径
})
export class NewworkService {
  // private map = (<any>window).configurationInfo.hostmap;
  // private hostbmw = (<any>window).configurationInfo.hostbmw;
  // private host = (<any>window).configurationInfo.host;
  // private baseUrl = (<any>window).configurationInfo.baseUrl;
  constructor(private http: HttpClient,public observe: observeService) { }

  public serviceUrl(url) {
    var s = !url.match(/.*(?=\?)/g)?url:url.match(/.*(?=\?)/g)[0];
    if (s.indexOf('dev')!==-1) {
      return 'dev'
    } else if (s.indexOf('int')!==-1) {
      return 'int'
    } else if (s.indexOf('str')!==-1) {
      return 'stg'
    } else if (s.indexOf('prod')!==-1) {
      return 'prod'
    } else {
      return 'https://bmwentportaldev.chinacloudsites.cn/api/gateway/loyaltyService/'
    }
  }
  public doLogin() {
    console.log( this.serviceUrl(window.location.href));
    // 当前 observable 已经被封装好了 无法在过程中插入其他的东西（并不能针对中间进行一些行为）
    // var header = {
    //   'sss':'ddd'
    // };
    // console.log(this.map);
    // console.log(this.hostbmw);
    // console.log(this.host);
    // console.log(this.baseUrl);
    var data = {
      "CampaignId":"1",
      "SponsorPhoneNum":"13621199162",
      "Name":"张",
      "NickName":"小灰灰",
      "WeChatID":"WeChatID",
      "CheckCode":"4321"
    };
    return new Promise((resolve,reject)=>{
      //                  https://bmwintegrationdev.chinacloudsites.cn/api/gateway/loyaltyservice/api/+
      this.http.post('https://bmwintegrationdev.chinacloudsites.cn/api/gateway/loyaltyservice/api/V1/CampaignShare/GetShareUrl',data,{ headers: this.setHeader() }).subscribe((data)=>{
        resolve(data)
      },()=>{
        console.log(this)
        this.observe.observe.emit('err');
      })
    })
    // return this.http.get('apidata/v2/movie/top250?start=25&count=25')
    //   .pipe(
    //     tap((data)=>{
    //       console.log(data)
    //     }),
    //     catchError(this.errorHander)
    //   )// 应该是observable的东西
  }
  setHeader() {
    return new HttpHeaders({'ocp-apim-subscription-key':'2014_MyBMW837',  'Content-Type': 'application/json'});
  }
}
