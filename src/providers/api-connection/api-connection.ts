import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/map';

/*
Generated class for the ApiConnectionProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/

@Injectable()
export class ApiConnectionProvider {

  private url: string;

  constructor(private http: HTTP) {
    // default url that might change
    // upToDate : 7/12/2017
    this.url = "http://172.18.22.86:5000";
  }

  // getter & setter
  getUrl(){
  return this.url;
}

setUrl(_url){
  this.url = _url;
}

// method get in order tomake get request
// parameter path : string
get(path){
  return new Promise((resolve,reject)=>{
    this.http.get(this.url+path, {},{})
    .then(res=>{
      console.log(res);
      switch(res.status){
        case 400: reject(res);break;
        case 401: reject(res);break;
        case 402: reject(res);break;
        case 403: reject(res);break;
        case 404: reject(res);break;
        case 500: reject(res);break;
        case 501: reject(res);break;
        case 502: reject(res);break;
        case 200 : resolve(res);break;
      };
    },(err) =>{
      reject(err);
      console.log(err);
    });
  });
}
}
