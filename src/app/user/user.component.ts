import { Component, OnInit } from '@angular/core';
import { TwitterApiService } from '../twitter-api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  handle = 'kmbrlydnll_';
  user = {
    "id": 132791985,
    "id_str": "132791985",
    "name": "Kimberly✨",
    "screen_name": "kmbrlydnll_",
    "location": "Manila City, National Capital Region",
    "profile_location": null,
    "description": "stressed 24/7 💁🏻‍♀️",
    "url": "https://t.co/OvIoRvYnFk",
    "entities": {
      "url": {
        "urls": [
          {
            "url": "https://t.co/OvIoRvYnFk",
            "expanded_url": "http://Instagram.com/kmbrlydnll_",
            "display_url": "Instagram.com/kmbrlydnll_",
            "indices": [
              0,
              23
            ]
          }
        ]
      },
      "description": {
        "urls": []
      }
    },
    "protected": false,
    "followers_count": 877,
    "friends_count": 377,
    "listed_count": 5,
    "created_at": "Wed Apr 14 05:38:33 +0000 2010",
    "favourites_count": 11438,
    "utc_offset": -28800,
    "time_zone": "Pacific Time (US & Canada)",
    "geo_enabled": false,
    "verified": false,
    "statuses_count": 49564,
    "lang": "en",
    "status": {
      "created_at": "Fri Dec 22 16:48:19 +0000 2017",
      "id": 944248246741844000,
      "id_str": "944248246741843969",
      "text": "@PatJMercs @lourdestabuyan @viaoftheworld Nakakainis",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "PatJMercs",
            "name": "PJ Mercado",
            "id": 161269817,
            "id_str": "161269817",
            "indices": [
              0,
              10
            ]
          },
          {
            "screen_name": "lourdestabuyan",
            "name": "des",
            "id": 574211975,
            "id_str": "574211975",
            "indices": [
              11,
              26
            ]
          },
          {
            "screen_name": "viaoftheworld",
            "name": "🦋",
            "id": 2406711655,
            "id_str": "2406711655",
            "indices": [
              27,
              41
            ]
          }
        ],
        "urls": []
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": 944248120166072300,
      "in_reply_to_status_id_str": "944248120166072325",
      "in_reply_to_user_id": 161269817,
      "in_reply_to_user_id_str": "161269817",
      "in_reply_to_screen_name": "PatJMercs",
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "lang": "tl"
    },
    "contributors_enabled": false,
    "is_translator": false,
    "is_translation_enabled": false,
    "profile_background_color": "000000",
    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme18/bg.gif",
    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme18/bg.gif",
    "profile_background_tile": false,
    "profile_image_url": "http://pbs.twimg.com/profile_images/934810986728407041/Kt-_ryJw_normal.jpg",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/934810986728407041/Kt-_ryJw_normal.jpg",
    "profile_banner_url": "https://pbs.twimg.com/profile_banners/132791985/1500398626",
    "profile_link_color": "FAB81E",
    "profile_sidebar_border_color": "000000",
    "profile_sidebar_fill_color": "000000",
    "profile_text_color": "000000",
    "profile_use_background_image": false,
    "has_extended_profile": true,
    "default_profile": false,
    "default_profile_image": false,
    "following": true,
    "follow_request_sent": false,
    "notifications": false,
    "translator_type": "none"
  };

  prof_pic_ext;
  prof_pic_url;

  constructor(private route: ActivatedRoute, private twitterApiService: TwitterApiService) {
    this.route.params.subscribe(res =>{
      this.handle = res.handle;
      console.log(res.handle);
    });

    this.twitterApiService.getUser(this.handle).subscribe(res =>{
      this.user = res;
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
