import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetTokenService {
  accessTokenUrl:string = "http://localhost:8080/authentication/callback";  
  constructor(private http:Http) { }
  getToken(info){
      console.log(info);
    return this.http.post(this.accessTokenUrl,
      {
        code:info
    });
  }

}
