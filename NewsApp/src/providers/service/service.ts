import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceProvider {
  API_KEY = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=1215d2d30c1548c49cf0af471c685a24';

  constructor(public httpClient: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  getNews(){
    return this.httpClient.get(this.API_KEY);
  }

}



