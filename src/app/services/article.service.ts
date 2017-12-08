import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { Article } from '../classes/article';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {

  private baseUrl: string = "https://newsapi.org";
  private apiKey: string = "540ea9d7afab4625bc3d9437ad9e33fc";
  private sources: string = "bbc-news";

  constructor(private http: Http) { }

  public getArticles(): Promise<Article[]> {
    let params = new URLSearchParams();
    params.set("apiKey", this.apiKey);
    params.set("sources", this.sources);

    return this.http.get(`${this.baseUrl}/v2/top-headlines`, { search: params })
      .toPromise()
      .then(resp => resp.json())
      .then(json => json.articles)
      .then(articles => {
        const list = articles.map(article => new Article(article.title, article.description, article.urlToImage, article.url, article.publishedAt));
        console.log(list);
        return list;
      })
      .catch(err => console.log(err));
  }

}
