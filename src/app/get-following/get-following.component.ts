import { Component, OnInit } from '@angular/core';
import { TwitterApiService } from '../twitter-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-following',
  templateUrl: './get-following.component.html',
  styleUrls: ['./get-following.component.scss']
})
export class GetFollowingComponent implements OnInit {

  handle: string;
  following;

  constructor(private twitterApiService: TwitterApiService, private route: ActivatedRoute) {
    this.route.params.subscribe((res)=>{
      this.handle = res.handle;
      console.log(res.handle);
    });

    this.twitterApiService.getFollowing(this.handle, 200).subscribe(res => {
      this.following = res;
      console.log(res);
    })
  }

  ngOnInit() {
  }

}
