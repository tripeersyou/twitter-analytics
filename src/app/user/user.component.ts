import {
  Component,
  OnInit
} from '@angular/core';
import {
  TwitterApiService
} from '../twitter-api.service';
import {
  ActivatedRoute
} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  handle;
  user;

  constructor(private route: ActivatedRoute, private twitterApiService: TwitterApiService) {
    this.route.params.subscribe(res => {
      this.handle = res.handle;
      console.log(res.handle);
    });

    this.twitterApiService.getUser(this.handle).subscribe(res => {
      this.user = res;
      console.log(res);
    });
  }

  ngOnInit() {}

}
