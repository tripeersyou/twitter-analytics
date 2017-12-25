import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class TwitterApiService {

  data: any
  
  constructor(private _http: Http) {

  }

  searchTweets(query: string, count?: number) {
    return this._http.get(`api/tweets?q=${query}&count=${count}`).map(response =>
      this.data = response.json()
    );
  }

  getFollowers(handle: string, count?: number) {
    return this._http.get(`api/followers/${handle}?count=${count}`).map(response =>
      this.data = response.json()
    );
  }

  getUser(handle: string) {
    return this._http.get(`api/user/${handle}`).map(response=>
      this.data = response.json()
    );
  }

  getFollowing(handle: string, count?: number) {
    return this._http.get(`api/following/${handle}?count=${count}`).map(response => this.data = response.json());
  }


}
