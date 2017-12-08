import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../classes/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  public article: Article;

  constructor() { }

  ngOnInit() {
  }

  public upvote() {
    this.article.voteUp();
  }

  public downvote() {
    this.article.voteDown();
  }
}
