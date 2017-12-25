import { Component, OnInit } from '@angular/core';
import { TwitterApiService } from '../twitter-api.service';

@Component({
  selector: 'app-search-tweets',
  templateUrl: './search-tweets.component.html',
  styleUrls: ['./search-tweets.component.scss']
})
export class SearchTweetsComponent implements OnInit {

  query: string;
  tweets;
  count: number = 15;

  constructor(private twitterApiService: TwitterApiService) { }

  ngOnInit() {
  }

  searchTweets(){
    this.twitterApiService.searchTweets(this.query, this.count).subscribe( res => {
      this.tweets = res;
    });
  }

}
