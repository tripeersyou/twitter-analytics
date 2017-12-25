import {
  Component,
  OnInit
} from '@angular/core';
import {
  TwitterApiService
} from '../twitter-api.service';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-get-followers',
  templateUrl: './get-followers.component.html',
  styleUrls: ['./get-followers.component.scss']
})
export class GetFollowersComponent implements OnInit {

  handle: string;
  followers;


  constructor(private twitterApiService: TwitterApiService, private route: ActivatedRoute) {

    this.route.params.subscribe((res) => {
      this.handle = res.handle;
      console.log(res.handle);
    });

    this.twitterApiService.getFollowers(this.handle, 200).subscribe(res => {
      this.followers = res;
      console.log(res);
    });

  }

  ngOnInit() {}


}
