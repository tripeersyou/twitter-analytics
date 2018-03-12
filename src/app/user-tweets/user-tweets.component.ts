import { Component, OnInit } from '@angular/core';
import { TwitterApiService } from '../twitter-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tweets',
  templateUrl: './user-tweets.component.html',
  styleUrls: ['./user-tweets.component.scss']
})
export class UserTweetsComponent implements OnInit {

  handle: string;
  tweets;

  constructor(private twitterApiService: TwitterApiService, private route: ActivatedRoute) {
    this.route.params.subscribe((res)=>{
      this.handle = res.handle;
      console.log(res.handle);
    });

    this.twitterApiService.getUserTweets(this.handle).subscribe(res => {
      this.tweets = res;
      console.log(res);
    })
  }

  ngOnInit() {
  }

}