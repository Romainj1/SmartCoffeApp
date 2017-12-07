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
    this.url = "172.18.22.86";
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

// signature : get(url, parameters, headers)
this.http.get(this.url+path, {}, {})
.then(data => {
  console.log(data.status);
  console.log(data.data); // data received by server
  console.log(data.headers);

})
.catch(error => {

  console.log(error.status);
  console.log(error.error); // error message as string
  console.log(error.headers);

});
}

}
