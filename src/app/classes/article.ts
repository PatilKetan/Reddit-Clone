export class Article {
  public title: string;
  public description: string;
  public votes: number;
  public publishedAt: string;
  public urlToImage: string;
  public Url: string;

  constructor(title: string, description: string, urlToImage: string, Url: string, publishedAt: string, votes?: number) {
    this.title = title;
    this.description = description;
    this.urlToImage = urlToImage;
    this.Url = Url;
    this.publishedAt = publishedAt;
    this.votes = votes || 0;
  }

  public voteUp() {
    this.votes = this.votes + 1;
  }

  public voteDown() {
    this.votes = this.votes - 1;
  }
}
