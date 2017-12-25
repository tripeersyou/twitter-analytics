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
  following = [
    {
      "id": 175712989,
      "id_str": "175712989",
      "name": "Alexis Collado",
      "screen_name": "alexiscollado",
      "location": "Quezon City, Philippines",
      "description": "Founder of User Experience Society, UX Designer, Travel Photographer, BS MIS, ADMU 2018 🤖",
      "url": "https://t.co/KS4ipyRRKd",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/KS4ipyRRKd",
              "expanded_url": "http://alexiscollado.com",
              "display_url": "alexiscollado.com",
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
      "followers_count": 1007,
      "friends_count": 1648,
      "listed_count": 60,
      "created_at": "Sat Aug 07 11:22:22 +0000 2010",
      "favourites_count": 4487,
      "utc_offset": 28800,
      "time_zone": "Beijing",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 3502,
      "lang": "en",
      "status": {
        "created_at": "Sun Dec 24 08:58:54 +0000 2017",
        "id": 944854888546050000,
        "id_str": "944854888546050048",
        "text": "@tryshdanielle Parang? meron pa ba iba? hahaaha",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "tryshdanielle",
              "name": "Trysh Olives",
              "id": 55527105,
              "id_str": "55527105",
              "indices": [
                0,
                14
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
        "in_reply_to_status_id": 944784089638355000,
        "in_reply_to_status_id_str": "944784089638354944",
        "in_reply_to_user_id": 55527105,
        "in_reply_to_user_id_str": "55527105",
        "in_reply_to_screen_name": "tryshdanielle",
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
      "profile_background_color": "00001F",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/876465184/86c10e924034521c85b96726c69dfd02.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/876465184/86c10e924034521c85b96726c69dfd02.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/903329771467051008/i2ZB8RW0_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/903329771467051008/i2ZB8RW0_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/175712989/1493003252",
      "profile_link_color": "981CEB",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 1555529971,
      "id_str": "1555529971",
      "name": "Nikita Nitura",
      "screen_name": "NNitura",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 449,
      "friends_count": 541,
      "listed_count": 3,
      "created_at": "Sat Jun 29 11:54:07 +0000 2013",
      "favourites_count": 6296,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 11056,
      "lang": "en",
      "status": {
        "created_at": "Sun Dec 24 07:21:28 +0000 2017",
        "id": 944830367206293500,
        "id_str": "944830367206293504",
        "text": "RT @metromanella: Glad that Ica Policarpio is already home. Meanwhile, found this on the comment section and this hit me hard. https://t.co…",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "metromanella",
              "name": "manell queen 👑",
              "id": 81580269,
              "id_str": "81580269",
              "indices": [
                3,
                16
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Sun Dec 24 05:20:33 +0000 2017",
          "id": 944799937870553100,
          "id_str": "944799937870553088",
          "text": "Glad that Ica Policarpio is already home. Meanwhile, found this on the comment section and this hit me hard. https://t.co/tJziftHTY8",
          "truncated": false,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
              {
                "id": 944799921277775900,
                "id_str": "944799921277775873",
                "indices": [
                  109,
                  132
                ],
                "media_url": "http://pbs.twimg.com/media/DRyahcuUMAEIiyt.jpg",
                "media_url_https": "https://pbs.twimg.com/media/DRyahcuUMAEIiyt.jpg",
                "url": "https://t.co/tJziftHTY8",
                "display_url": "pic.twitter.com/tJziftHTY8",
                "expanded_url": "https://twitter.com/metromanella/status/944799937870553088/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "large": {
                    "w": 710,
                    "h": 263,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 710,
                    "h": 263,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 252,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 944799921277775900,
                "id_str": "944799921277775873",
                "indices": [
                  109,
                  132
                ],
                "media_url": "http://pbs.twimg.com/media/DRyahcuUMAEIiyt.jpg",
                "media_url_https": "https://pbs.twimg.com/media/DRyahcuUMAEIiyt.jpg",
                "url": "https://t.co/tJziftHTY8",
                "display_url": "pic.twitter.com/tJziftHTY8",
                "expanded_url": "https://twitter.com/metromanella/status/944799937870553088/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "large": {
                    "w": 710,
                    "h": 263,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 710,
                    "h": 263,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 252,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/#!/download/ipad\" rel=\"nofollow\">Twitter for iPad</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 2393,
          "favorite_count": 5405,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 2393,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "ABB8C2",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/587301278201446400/mE0u9mvv.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/587301278201446400/mE0u9mvv.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/915949144774139906/4hakSe7m_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/915949144774139906/4hakSe7m_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1555529971/1418659043",
      "profile_link_color": "333333",
      "profile_sidebar_border_color": "EEEEEE",
      "profile_sidebar_fill_color": "F6F6F6",
      "profile_text_color": "038543",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 418344551,
      "id_str": "418344551",
      "name": "K I M 🐶",
      "screen_name": "KimberlyDnielle",
      "location": "",
      "description": "pupperina",
      "url": "https://t.co/j9Tv7jYyRV",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/j9Tv7jYyRV",
              "expanded_url": "http://ask.fm/KimberlyDnielle",
              "display_url": "ask.fm/KimberlyDnielle",
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
      "followers_count": 249,
      "friends_count": 231,
      "listed_count": 0,
      "created_at": "Tue Nov 22 02:10:42 +0000 2011",
      "favourites_count": 3062,
      "utc_offset": 28800,
      "time_zone": "Hong Kong",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 6396,
      "lang": "en",
      "status": {
        "created_at": "Sun Dec 24 06:10:45 +0000 2017",
        "id": 944812571416133600,
        "id_str": "944812571416133634",
        "text": "Same https://t.co/ZRzhB5D12q",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": [],
          "media": [
            {
              "id": 944812552894038000,
              "id_str": "944812552894038017",
              "indices": [
                5,
                28
              ],
              "media_url": "http://pbs.twimg.com/media/DRymAtKUQAEXp_s.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRymAtKUQAEXp_s.jpg",
              "url": "https://t.co/ZRzhB5D12q",
              "display_url": "pic.twitter.com/ZRzhB5D12q",
              "expanded_url": "https://twitter.com/KimberlyDnielle/status/944812571416133634/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 720,
                  "h": 716,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 676,
                  "resize": "fit"
                },
                "large": {
                  "w": 720,
                  "h": 716,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 944812552894038000,
              "id_str": "944812552894038017",
              "indices": [
                5,
                28
              ],
              "media_url": "http://pbs.twimg.com/media/DRymAtKUQAEXp_s.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRymAtKUQAEXp_s.jpg",
              "url": "https://t.co/ZRzhB5D12q",
              "display_url": "pic.twitter.com/ZRzhB5D12q",
              "expanded_url": "https://twitter.com/KimberlyDnielle/status/944812571416133634/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 720,
                  "h": 716,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 676,
                  "resize": "fit"
                },
                "large": {
                  "w": 720,
                  "h": 716,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": {
          "id": "006523c50dfe9086",
          "url": "https://api.twitter.com/1.1/geo/id/006523c50dfe9086.json",
          "place_type": "city",
          "name": "Quezon City",
          "full_name": "Quezon City, National Capital Region",
          "country_code": "PH",
          "country": "Republic of the Philippines",
          "contained_within": [],
          "bounding_box": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  120.989705,
                  14.5893763
                ],
                [
                  121.1357656,
                  14.5893763
                ],
                [
                  121.1357656,
                  14.7766484
                ],
                [
                  120.989705,
                  14.7766484
                ]
              ]
            ]
          },
          "attributes": {}
        },
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 1,
        "favorite_count": 2,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": true,
        "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "ACDED6",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/566385032038596608/jiG2NV2G.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/566385032038596608/jiG2NV2G.jpeg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/937321118116954116/9sJpGicu_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/937321118116954116/9sJpGicu_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/418344551/1514030917",
      "profile_link_color": "38B6F0",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 154101116,
      "id_str": "154101116",
      "name": "DUA LIPA",
      "screen_name": "DUALIPA",
      "location": "LONDON ",
      "description": "YA HEARD IT HERE FIRST #LOVES",
      "url": "https://t.co/96g7YQdMZC",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/96g7YQdMZC",
              "expanded_url": "https://wbr.ec/dualipa-album",
              "display_url": "wbr.ec/dualipa-album",
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
      "followers_count": 1267386,
      "friends_count": 1142,
      "listed_count": 3024,
      "created_at": "Thu Jun 10 11:04:31 +0000 2010",
      "favourites_count": 9329,
      "utc_offset": 0,
      "time_zone": "London",
      "geo_enabled": true,
      "verified": true,
      "statuses_count": 7093,
      "lang": "en",
      "status": {
        "created_at": "Sat Dec 23 19:47:05 +0000 2017",
        "id": 944655621252632600,
        "id_str": "944655621252632576",
        "text": "We love Mr Monroe https://t.co/li7x1OKtjm",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": [
            {
              "url": "https://t.co/li7x1OKtjm",
              "expanded_url": "https://twitter.com/iandavidmonroe/status/944654449804562433",
              "display_url": "twitter.com/iandavidmonroe…",
              "indices": [
                18,
                41
              ]
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": true,
        "quoted_status_id": 944654449804562400,
        "quoted_status_id_str": "944654449804562433",
        "retweet_count": 689,
        "favorite_count": 6485,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "ACDED6",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/285471197/twit_background.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/285471197/twit_background.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/862732127233875968/d5fIHguu_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/862732127233875968/d5fIHguu_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/154101116/1496393361",
      "profile_link_color": "038543",
      "profile_sidebar_border_color": "EEEEEE",
      "profile_sidebar_fill_color": "F6F6F6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 488308556,
      "id_str": "488308556",
      "name": "Andre Sevilla",
      "screen_name": "andresevillaa",
      "location": "MNL • SEO",
      "description": "half korean • half bbq",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 420,
      "friends_count": 380,
      "listed_count": 1,
      "created_at": "Fri Feb 10 09:41:59 +0000 2012",
      "favourites_count": 161,
      "utc_offset": 28800,
      "time_zone": "Beijing",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 45045,
      "lang": "en",
      "status": {
        "created_at": "Sun Dec 24 02:29:59 +0000 2017",
        "id": 944757012805513200,
        "id_str": "944757012805513216",
        "text": "@deynuhhh @gaylebasingaa @paulinebntjbaa",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "deynuhhh",
              "name": "Dana Ortega",
              "id": 264150750,
              "id_str": "264150750",
              "indices": [
                0,
                9
              ]
            },
            {
              "screen_name": "gaylebasingaa",
              "name": "Gayle Basinga",
              "id": 387479395,
              "id_str": "387479395",
              "indices": [
                10,
                24
              ]
            },
            {
              "screen_name": "paulinebntjbaa",
              "name": "pau",
              "id": 3177296106,
              "id_str": "3177296106",
              "indices": [
                25,
                40
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
        "in_reply_to_status_id": 944751948258873300,
        "in_reply_to_status_id_str": "944751948258873346",
        "in_reply_to_user_id": 264150750,
        "in_reply_to_user_id_str": "264150750",
        "in_reply_to_screen_name": "deynuhhh",
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 1,
        "favorited": false,
        "retweeted": false,
        "lang": "und"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/468649804319297536/wr_m58Dx.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/468649804319297536/wr_m58Dx.jpeg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/880418299149918210/TdZLX3Az_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/880418299149918210/TdZLX3Az_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/488308556/1467197243",
      "profile_link_color": "0000FF",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "1F77D8",
      "profile_text_color": "F9F7FC",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 2493431251,
      "id_str": "2493431251",
      "name": "Taron Egerton",
      "screen_name": "TaronEgerton",
      "location": "",
      "description": "Actor from Aberystwyth, Wales.",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 360506,
      "friends_count": 209,
      "listed_count": 892,
      "created_at": "Tue May 13 19:19:18 +0000 2014",
      "favourites_count": 392,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 523,
      "lang": "en",
      "status": {
        "created_at": "Thu Dec 07 18:29:56 +0000 2017",
        "id": 938838000812875800,
        "id_str": "938838000812875778",
        "text": "This is amazing. So, so clever. Great work @LazyHabitsUK! Check it out,\n@RockstarGames. https://t.co/bfjdkOG6FK #ThrowbackThursday",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "ThrowbackThursday",
              "indices": [
                112,
                130
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "LazyHabitsUK",
              "name": "Lazy Habits",
              "id": 37904981,
              "id_str": "37904981",
              "indices": [
                43,
                56
              ]
            },
            {
              "screen_name": "RockstarGames",
              "name": "Rockstar Games",
              "id": 29758446,
              "id_str": "29758446",
              "indices": [
                72,
                86
              ]
            }
          ],
          "urls": [
            {
              "url": "https://t.co/bfjdkOG6FK",
              "expanded_url": "https://m.youtube.com/watch?v=gM_5zOU6A8c",
              "display_url": "m.youtube.com/watch?v=gM_5zO…",
              "indices": [
                88,
                111
              ]
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 263,
        "favorite_count": 2142,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/750064428184371200/0DCDtYA-_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/750064428184371200/0DCDtYA-_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2493431251/1422250885",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 24929621,
      "id_str": "24929621",
      "name": "Paris Hilton",
      "screen_name": "ParisHilton",
      "location": "UNICORN MIST ➡️⤵️",
      "description": "https://t.co/BnnTbIY9kd | This Holiday Season, Get the most magical gift for your loved one! ✨🦄✨Order my #ParisHiltonUnicornMist today",
      "url": "https://t.co/3oQt64yhvC",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/3oQt64yhvC",
              "expanded_url": "http://unicornmist.com/products/unicorn-mist",
              "display_url": "unicornmist.com/products/unico…",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "https://t.co/BnnTbIY9kd",
              "expanded_url": "http://YouTube.com/ParisHilton",
              "display_url": "YouTube.com/ParisHilton",
              "indices": [
                0,
                23
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 17433076,
      "friends_count": 7536,
      "listed_count": 52898,
      "created_at": "Tue Mar 17 18:45:05 +0000 2009",
      "favourites_count": 13632,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": true,
      "statuses_count": 28908,
      "lang": "en",
      "status": {
        "created_at": "Sun Dec 24 03:37:22 +0000 2017",
        "id": 944773969378512900,
        "id_str": "944773969378512896",
        "text": "RT @ParisHilton: Loving the newest addition to my art collection by @JoJoAnavim. Love his work!😍 This #KateMoss piece is #iconicAF 💯 https:…",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "KateMoss",
              "indices": [
                102,
                111
              ]
            },
            {
              "text": "iconicAF",
              "indices": [
                121,
                130
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "ParisHilton",
              "name": "Paris Hilton",
              "id": 24929621,
              "id_str": "24929621",
              "indices": [
                3,
                15
              ]
            },
            {
              "screen_name": "jojoanavim",
              "name": "Jojo Anavim",
              "id": 121893636,
              "id_str": "121893636",
              "indices": [
                68,
                79
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Sun Dec 24 01:10:52 +0000 2017",
          "id": 944737102071287800,
          "id_str": "944737102071287813",
          "text": "Loving the newest addition to my art collection by @JoJoAnavim. Love his work!😍 This #KateMoss piece is #iconicAF 💯 https://t.co/xteZcF190s",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "KateMoss",
                "indices": [
                  85,
                  94
                ]
              },
              {
                "text": "iconicAF",
                "indices": [
                  104,
                  113
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [
              {
                "screen_name": "jojoanavim",
                "name": "Jojo Anavim",
                "id": 121893636,
                "id_str": "121893636",
                "indices": [
                  51,
                  62
                ]
              }
            ],
            "urls": [],
            "media": [
              {
                "id": 944737094043390000,
                "id_str": "944737094043389952",
                "indices": [
                  116,
                  139
                ],
                "media_url": "http://pbs.twimg.com/media/DRxhYbCXUAAEGVu.jpg",
                "media_url_https": "https://pbs.twimg.com/media/DRxhYbCXUAAEGVu.jpg",
                "url": "https://t.co/xteZcF190s",
                "display_url": "pic.twitter.com/xteZcF190s",
                "expanded_url": "https://twitter.com/ParisHilton/status/944737102071287813/photo/1",
                "type": "photo",
                "sizes": {
                  "medium": {
                    "w": 750,
                    "h": 722,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 680,
                    "h": 655,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 750,
                    "h": 722,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 944737094043390000,
                "id_str": "944737094043389952",
                "indices": [
                  116,
                  139
                ],
                "media_url": "http://pbs.twimg.com/media/DRxhYbCXUAAEGVu.jpg",
                "media_url_https": "https://pbs.twimg.com/media/DRxhYbCXUAAEGVu.jpg",
                "url": "https://t.co/xteZcF190s",
                "display_url": "pic.twitter.com/xteZcF190s",
                "expanded_url": "https://twitter.com/ParisHilton/status/944737102071287813/photo/1",
                "type": "photo",
                "sizes": {
                  "medium": {
                    "w": 750,
                    "h": 722,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 680,
                    "h": 655,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 750,
                    "h": 722,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 104,
          "favorite_count": 598,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 104,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": true,
      "profile_background_color": "FFFFFF",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/592740293499179008/nYBWhaWk.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/592740293499179008/nYBWhaWk.jpg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/935607193541468160/fOQBZdIk_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/935607193541468160/fOQBZdIk_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/24929621/1511415461",
      "profile_link_color": "E872C5",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E5507E",
      "profile_text_color": "544640",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "regular"
    },
    {
      "id": 109244068,
      "id_str": "109244068",
      "name": "Jello bells, Jello all the way",
      "screen_name": "_jellobee",
      "location": "Santa Maria, Bulacan 🐝",
      "description": "atenista | enfp",
      "url": "https://t.co/7lsgWwsquF",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/7lsgWwsquF",
              "expanded_url": "http://fb.com/jlmbeasca",
              "display_url": "fb.com/jlmbeasca",
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
      "followers_count": 279,
      "friends_count": 240,
      "listed_count": 0,
      "created_at": "Thu Jan 28 12:21:24 +0000 2010",
      "favourites_count": 1443,
      "utc_offset": 28800,
      "time_zone": "Hong Kong",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 12497,
      "lang": "en",
      "status": {
        "created_at": "Sun Dec 24 10:03:04 +0000 2017",
        "id": 944871036830359600,
        "id_str": "944871036830359554",
        "text": "6 hrs to go #MerryChristmas https://t.co/1XODUZ9Ron",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "MerryChristmas",
              "indices": [
                12,
                27
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [],
          "urls": [],
          "media": [
            {
              "id": 944871024767537200,
              "id_str": "944871024767537152",
              "indices": [
                28,
                51
              ],
              "media_url": "http://pbs.twimg.com/media/DRzbMN3UEAAWyxB.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRzbMN3UEAAWyxB.jpg",
              "url": "https://t.co/1XODUZ9Ron",
              "display_url": "pic.twitter.com/1XODUZ9Ron",
              "expanded_url": "https://twitter.com/_jellobee/status/944871036830359554/photo/1",
              "type": "photo",
              "sizes": {
                "small": {
                  "w": 604,
                  "h": 453,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 604,
                  "h": 453,
                  "resize": "fit"
                },
                "large": {
                  "w": 604,
                  "h": 453,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 944871024767537200,
              "id_str": "944871024767537152",
              "indices": [
                28,
                51
              ],
              "media_url": "http://pbs.twimg.com/media/DRzbMN3UEAAWyxB.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRzbMN3UEAAWyxB.jpg",
              "url": "https://t.co/1XODUZ9Ron",
              "display_url": "pic.twitter.com/1XODUZ9Ron",
              "expanded_url": "https://twitter.com/_jellobee/status/944871036830359554/photo/1",
              "type": "photo",
              "sizes": {
                "small": {
                  "w": 604,
                  "h": 453,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 604,
                  "h": 453,
                  "resize": "fit"
                },
                "large": {
                  "w": 604,
                  "h": 453,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 2,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "ABB8C2",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme18/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme18/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/928158218680860673/Rl4SzKsc_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/928158218680860673/Rl4SzKsc_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/109244068/1497702800",
      "profile_link_color": "1B95E0",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 790089966730694700,
      "id_str": "790089966730694656",
      "name": "chloe",
      "screen_name": "itsyagirlclaui",
      "location": "",
      "description": "🕊 @chloeavilaa",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 427,
      "friends_count": 408,
      "listed_count": 0,
      "created_at": "Sun Oct 23 07:18:22 +0000 2016",
      "favourites_count": 712,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 186,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/939878805652488193/5a7_dLOs_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/939878805652488193/5a7_dLOs_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/790089966730694656/1509853644",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 182786451,
      "id_str": "182786451",
      "name": "Ana Mariela Gonzales",
      "screen_name": "nutiellaaaaaa",
      "location": "admu",
      "description": "gratitude, always | chak",
      "url": "https://t.co/5p6aBZziCR",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/5p6aBZziCR",
              "expanded_url": "https://Instagram.com/nutiellaaaaaa",
              "display_url": "Instagram.com/nutiellaaaaaa",
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
      "followers_count": 935,
      "friends_count": 597,
      "listed_count": 1,
      "created_at": "Wed Aug 25 11:46:38 +0000 2010",
      "favourites_count": 23209,
      "utc_offset": -32400,
      "time_zone": "Alaska",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 23638,
      "lang": "en",
      "status": {
        "created_at": "Sun Dec 24 07:09:48 +0000 2017",
        "id": 944827431650652200,
        "id_str": "944827431650652160",
        "text": "@JulioDuarts this goes for all the thoughtful, genuine, soul-baring beautiful people 😌 urself included!!",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "JulioDuarts",
              "name": "Julio Duarte",
              "id": 481825492,
              "id_str": "481825492",
              "indices": [
                0,
                12
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": 944804396067569700,
        "in_reply_to_status_id_str": "944804396067569664",
        "in_reply_to_user_id": 481825492,
        "in_reply_to_user_id_str": "481825492",
        "in_reply_to_screen_name": "JulioDuarts",
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "710C99",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/446604010384932864/UXwU4vFa.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/446604010384932864/UXwU4vFa.jpeg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/944055658873200640/s58CA3ZT_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/944055658873200640/s58CA3ZT_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/182786451/1513624606",
      "profile_link_color": "9266CC",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "7AC3EE",
      "profile_text_color": "3D1957",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 2579653010,
      "id_str": "2579653010",
      "name": "Laica Noguera",
      "screen_name": "laicanoguera",
      "location": "Katipunan, Q.C",
      "description": "AMDG sc: lalalaica",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 336,
      "friends_count": 531,
      "listed_count": 1,
      "created_at": "Sat Jun 21 02:27:33 +0000 2014",
      "favourites_count": 3115,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 5340,
      "lang": "en",
      "status": {
        "created_at": "Sun Dec 24 09:08:45 +0000 2017",
        "id": 944857367241297900,
        "id_str": "944857367241297920",
        "text": "RT @MatanglawinADMU: 9 na oras na lang ang natitira bago ang Pasko!\n\nNgayong Pasko, huwag magbulag-bulagan sa kabila ng nakakasilaw at kumu…",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "MatanglawinADMU",
              "name": "Matanglawin Ateneo",
              "id": 1379580613,
              "id_str": "1379580613",
              "indices": [
                3,
                19
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Sun Dec 24 07:02:17 +0000 2017",
          "id": 944825538438316000,
          "id_str": "944825538438316033",
          "text": "9 na oras na lang ang natitira bago ang Pasko!\n\nNgayong Pasko, huwag magbulag-bulagan sa kabila ng nakakasilaw at k… https://t.co/7rRLFuYslp",
          "truncated": true,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
              {
                "url": "https://t.co/7rRLFuYslp",
                "expanded_url": "https://twitter.com/i/web/status/944825538438316033",
                "display_url": "twitter.com/i/web/status/9…",
                "indices": [
                  117,
                  140
                ]
              }
            ]
          },
          "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 19,
          "favorite_count": 26,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "tl"
        },
        "is_quote_status": false,
        "retweet_count": 19,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "tl"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/507152061314506752/Upp2avNU.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/507152061314506752/Upp2avNU.jpeg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/942078965719502848/5ZSpP_Md_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/942078965719502848/5ZSpP_Md_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2579653010/1454365180",
      "profile_link_color": "ABB8C2",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 51020421,
      "id_str": "51020421",
      "name": "chelsea senga",
      "screen_name": "chopeysnga",
      "location": "hiraeth - rivers of air",
      "description": "BS MIS snap/insta:chopeysnga",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 196,
      "friends_count": 196,
      "listed_count": 0,
      "created_at": "Fri Jun 26 11:28:36 +0000 2009",
      "favourites_count": 1260,
      "utc_offset": -32400,
      "time_zone": "Alaska",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 4028,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "FFFFFF",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/603106004872507392/ssalKn8K.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/603106004872507392/ssalKn8K.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/941609878077837314/DoDXIRP0_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/941609878077837314/DoDXIRP0_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/51020421/1503623532",
      "profile_link_color": "F5ABB5",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "7AC3EE",
      "profile_text_color": "00B5F7",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 2208306198,
      "id_str": "2208306198",
      "name": "Kevin Redder",
      "screen_name": "KevinRedder",
      "location": "Gothenburg, Sweden",
      "description": "Aspiring rockstar, model, pizza eater and fulltime senpai. snapchat: kebinredder Swedish/Filipino Not going to Philippines in December *Official Account*",
      "url": "https://t.co/naxm5J0VSI",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/naxm5J0VSI",
              "expanded_url": "http://Instagram.com/mistersenpai",
              "display_url": "Instagram.com/mistersenpai",
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
      "followers_count": 22814,
      "friends_count": 2567,
      "listed_count": 23,
      "created_at": "Fri Nov 22 04:27:57 +0000 2013",
      "favourites_count": 13117,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 1598,
      "lang": "en",
      "status": {
        "created_at": "Fri Dec 22 09:36:48 +0000 2017",
        "id": 944139652117745700,
        "id_str": "944139652117745665",
        "text": "💦 https://t.co/EaoRBXsNQd",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": [],
          "media": [
            {
              "id": 944139648275812400,
              "id_str": "944139648275812354",
              "indices": [
                2,
                25
              ],
              "media_url": "http://pbs.twimg.com/media/DRpCAgHXkAIwGkx.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRpCAgHXkAIwGkx.jpg",
              "url": "https://t.co/EaoRBXsNQd",
              "display_url": "pic.twitter.com/EaoRBXsNQd",
              "expanded_url": "https://twitter.com/KevinRedder/status/944139652117745665/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1536,
                  "h": 2048,
                  "resize": "fit"
                },
                "medium": {
                  "w": 900,
                  "h": 1200,
                  "resize": "fit"
                },
                "small": {
                  "w": 510,
                  "h": 680,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 944139648275812400,
              "id_str": "944139648275812354",
              "indices": [
                2,
                25
              ],
              "media_url": "http://pbs.twimg.com/media/DRpCAgHXkAIwGkx.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRpCAgHXkAIwGkx.jpg",
              "url": "https://t.co/EaoRBXsNQd",
              "display_url": "pic.twitter.com/EaoRBXsNQd",
              "expanded_url": "https://twitter.com/KevinRedder/status/944139652117745665/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1536,
                  "h": 2048,
                  "resize": "fit"
                },
                "medium": {
                  "w": 900,
                  "h": 1200,
                  "resize": "fit"
                },
                "small": {
                  "w": 510,
                  "h": 680,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 89,
        "favorite_count": 1969,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "und"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "070808",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/635131280120676352/-GVJzVDJ.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/635131280120676352/-GVJzVDJ.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/906051302450487297/-qDB9B5t_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/906051302450487297/-qDB9B5t_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2208306198/1501180965",
      "profile_link_color": "FFCB08",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 555825949,
      "id_str": "555825949",
      "name": "Rap",
      "screen_name": "OyRapAdrian",
      "location": "Makati City",
      "description": "Snapchat👻: rapadrian || Facebook: Rap Adrian || Instagram: oyrapadrian",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 136,
      "friends_count": 167,
      "listed_count": 0,
      "created_at": "Tue Apr 17 09:26:35 +0000 2012",
      "favourites_count": 773,
      "utc_offset": 28800,
      "time_zone": "Beijing",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 1939,
      "lang": "en",
      "status": {
        "created_at": "Sat Dec 23 13:59:12 +0000 2017",
        "id": 944568072307851300,
        "id_str": "944568072307851264",
        "text": "RT @FCBarcelona: ⏰ Final whistle in the Bernabéu! Real Madrid 0-3 FC Barcelona ⚽️ Suárez, Messi and Aleix Vidal 🔴🔵 #ElClásico #ForçaBarça h…",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "ElClásico",
              "indices": [
                115,
                125
              ]
            },
            {
              "text": "ForçaBarça",
              "indices": [
                126,
                137
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "FCBarcelona",
              "name": "FC Barcelona",
              "id": 96951800,
              "id_str": "96951800",
              "indices": [
                3,
                15
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Sat Dec 23 13:56:23 +0000 2017",
          "id": 944567363202093000,
          "id_str": "944567363202093056",
          "text": "⏰ Final whistle in the Bernabéu! Real Madrid 0-3 FC Barcelona ⚽️ Suárez, Messi and Aleix Vidal 🔴🔵 #ElClásico… https://t.co/JrXbF62n4Y",
          "truncated": true,
          "entities": {
            "hashtags": [
              {
                "text": "ElClásico",
                "indices": [
                  98,
                  108
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [
              {
                "url": "https://t.co/JrXbF62n4Y",
                "expanded_url": "https://twitter.com/i/web/status/944567363202093056",
                "display_url": "twitter.com/i/web/status/9…",
                "indices": [
                  110,
                  133
                ]
              }
            ]
          },
          "source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 7709,
          "favorite_count": 13235,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "es"
        },
        "is_quote_status": false,
        "retweet_count": 7709,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "es"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "131516",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/676131743766740992/8fq1x7g2.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/676131743766740992/8fq1x7g2.jpg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/929747088522452992/SvHftDQk_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/929747088522452992/SvHftDQk_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/555825949/1461347244",
      "profile_link_color": "131516",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 4610320758,
      "id_str": "4610320758",
      "name": "Azzarro",
      "screen_name": "AzzarroMuschino",
      "location": "",
      "description": "Remember why you started.",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 53,
      "friends_count": 50,
      "listed_count": 0,
      "created_at": "Sun Dec 20 07:32:25 +0000 2015",
      "favourites_count": 66,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 247,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/888398263367327744/cYPw2hfl_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/888398263367327744/cYPw2hfl_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/4610320758/1504079857",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 266059360,
      "id_str": "266059360",
      "name": "Laura Ang",
      "screen_name": "the_L_aura",
      "location": "Philippines",
      "description": "Junior university student in Ateneo de Manila University – I love solving design problems and building valuable products for people.",
      "url": "https://t.co/oHn0nle7RJ",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/oHn0nle7RJ",
              "expanded_url": "https://lauradeniseang.sarahah.com/",
              "display_url": "lauradeniseang.sarahah.com",
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
      "protected": true,
      "followers_count": 293,
      "friends_count": 197,
      "listed_count": 1,
      "created_at": "Mon Mar 14 15:42:18 +0000 2011",
      "favourites_count": 2542,
      "utc_offset": 28800,
      "time_zone": "Hong Kong",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 12850,
      "lang": "en",
      "status": {
        "created_at": "Sun Dec 24 05:38:38 +0000 2017",
        "id": 944804490946928600,
        "id_str": "944804490946928641",
        "text": "https://t.co/9vLW9Dk2V3",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": [
            {
              "url": "https://t.co/9vLW9Dk2V3",
              "expanded_url": "https://open.spotify.com/track/71DPx5JtCozTD568zQxcwn?si=yjIyQXh1",
              "display_url": "open.spotify.com/track/71DPx5Jt…",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "und"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5B6D5",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000054988518/c0b42b26beac2211c48452476f991789.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000054988518/c0b42b26beac2211c48452476f991789.jpeg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/943778279743356929/t_PF73na_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/943778279743356929/t_PF73na_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/266059360/1511793336",
      "profile_link_color": "819BFF",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D8C0C0",
      "profile_text_color": "FFF0F0",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 183567718,
      "id_str": "183567718",
      "name": "Sam",
      "screen_name": "soniariita",
      "location": "",
      "description": "",
      "url": "https://t.co/jCGyWq3ATw",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/jCGyWq3ATw",
              "expanded_url": "https://kristinsaam.wordpress.com/",
              "display_url": "kristinsaam.wordpress.com",
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
      "followers_count": 335,
      "friends_count": 272,
      "listed_count": 2,
      "created_at": "Fri Aug 27 09:41:55 +0000 2010",
      "favourites_count": 5429,
      "utc_offset": -32400,
      "time_zone": "Alaska",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 4669,
      "lang": "en",
      "status": {
        "created_at": "Sat Dec 23 06:24:49 +0000 2017",
        "id": 944453722687520800,
        "id_str": "944453722687520769",
        "text": "RT @Faby_1DFam: my aesthetic is niall for tmrw mag https://t.co/lWknMA4Kse",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "Faby_1DFam",
              "name": "faby",
              "id": 1361757672,
              "id_str": "1361757672",
              "indices": [
                3,
                14
              ]
            }
          ],
          "urls": [],
          "media": [
            {
              "id": 944299627091759100,
              "id_str": "944299627091759105",
              "indices": [
                51,
                74
              ],
              "media_url": "http://pbs.twimg.com/media/DRrTgfpWkAEC_TA.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRrTgfpWkAEC_TA.jpg",
              "url": "https://t.co/lWknMA4Kse",
              "display_url": "pic.twitter.com/lWknMA4Kse",
              "expanded_url": "https://twitter.com/Faby_1DFam/status/944299834722410496/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 453,
                  "h": 680,
                  "resize": "fit"
                },
                "medium": {
                  "w": 800,
                  "h": 1200,
                  "resize": "fit"
                },
                "large": {
                  "w": 800,
                  "h": 1200,
                  "resize": "fit"
                }
              },
              "source_status_id": 944299834722410500,
              "source_status_id_str": "944299834722410496",
              "source_user_id": 1361757672,
              "source_user_id_str": "1361757672"
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 944299627091759100,
              "id_str": "944299627091759105",
              "indices": [
                51,
                74
              ],
              "media_url": "http://pbs.twimg.com/media/DRrTgfpWkAEC_TA.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRrTgfpWkAEC_TA.jpg",
              "url": "https://t.co/lWknMA4Kse",
              "display_url": "pic.twitter.com/lWknMA4Kse",
              "expanded_url": "https://twitter.com/Faby_1DFam/status/944299834722410496/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 453,
                  "h": 680,
                  "resize": "fit"
                },
                "medium": {
                  "w": 800,
                  "h": 1200,
                  "resize": "fit"
                },
                "large": {
                  "w": 800,
                  "h": 1200,
                  "resize": "fit"
                }
              },
              "source_status_id": 944299834722410500,
              "source_status_id_str": "944299834722410496",
              "source_user_id": 1361757672,
              "source_user_id_str": "1361757672"
            },
            {
              "id": 944299658368741400,
              "id_str": "944299658368741377",
              "indices": [
                51,
                74
              ],
              "media_url": "http://pbs.twimg.com/media/DRrTiUKXcAEAAbv.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRrTiUKXcAEAAbv.jpg",
              "url": "https://t.co/lWknMA4Kse",
              "display_url": "pic.twitter.com/lWknMA4Kse",
              "expanded_url": "https://twitter.com/Faby_1DFam/status/944299834722410496/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 707,
                  "h": 1200,
                  "resize": "fit"
                },
                "small": {
                  "w": 401,
                  "h": 680,
                  "resize": "fit"
                },
                "large": {
                  "w": 707,
                  "h": 1200,
                  "resize": "fit"
                }
              },
              "source_status_id": 944299834722410500,
              "source_status_id_str": "944299834722410496",
              "source_user_id": 1361757672,
              "source_user_id_str": "1361757672"
            },
            {
              "id": 944299679688339500,
              "id_str": "944299679688339456",
              "indices": [
                51,
                74
              ],
              "media_url": "http://pbs.twimg.com/media/DRrTjjlWsAAiKU8.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRrTjjlWsAAiKU8.jpg",
              "url": "https://t.co/lWknMA4Kse",
              "display_url": "pic.twitter.com/lWknMA4Kse",
              "expanded_url": "https://twitter.com/Faby_1DFam/status/944299834722410496/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 800,
                  "h": 1200,
                  "resize": "fit"
                },
                "large": {
                  "w": 800,
                  "h": 1200,
                  "resize": "fit"
                },
                "small": {
                  "w": 453,
                  "h": 680,
                  "resize": "fit"
                }
              },
              "source_status_id": 944299834722410500,
              "source_status_id_str": "944299834722410496",
              "source_user_id": 1361757672,
              "source_user_id_str": "1361757672"
            },
            {
              "id": 944299699267391500,
              "id_str": "944299699267391488",
              "indices": [
                51,
                74
              ],
              "media_url": "http://pbs.twimg.com/media/DRrTkshXUAA_1LH.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRrTkshXUAA_1LH.jpg",
              "url": "https://t.co/lWknMA4Kse",
              "display_url": "pic.twitter.com/lWknMA4Kse",
              "expanded_url": "https://twitter.com/Faby_1DFam/status/944299834722410496/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 800,
                  "h": 650,
                  "resize": "fit"
                },
                "medium": {
                  "w": 800,
                  "h": 650,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 553,
                  "resize": "fit"
                }
              },
              "source_status_id": 944299834722410500,
              "source_status_id_str": "944299834722410496",
              "source_user_id": 1361757672,
              "source_user_id_str": "1361757672"
            }
          ]
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Lite</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Fri Dec 22 20:13:19 +0000 2017",
          "id": 944299834722410500,
          "id_str": "944299834722410496",
          "text": "my aesthetic is niall for tmrw mag https://t.co/lWknMA4Kse",
          "truncated": false,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
              {
                "id": 944299627091759100,
                "id_str": "944299627091759105",
                "indices": [
                  35,
                  58
                ],
                "media_url": "http://pbs.twimg.com/media/DRrTgfpWkAEC_TA.jpg",
                "media_url_https": "https://pbs.twimg.com/media/DRrTgfpWkAEC_TA.jpg",
                "url": "https://t.co/lWknMA4Kse",
                "display_url": "pic.twitter.com/lWknMA4Kse",
                "expanded_url": "https://twitter.com/Faby_1DFam/status/944299834722410496/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 453,
                    "h": 680,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 800,
                    "h": 1200,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 800,
                    "h": 1200,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 944299627091759100,
                "id_str": "944299627091759105",
                "indices": [
                  35,
                  58
                ],
                "media_url": "http://pbs.twimg.com/media/DRrTgfpWkAEC_TA.jpg",
                "media_url_https": "https://pbs.twimg.com/media/DRrTgfpWkAEC_TA.jpg",
                "url": "https://t.co/lWknMA4Kse",
                "display_url": "pic.twitter.com/lWknMA4Kse",
                "expanded_url": "https://twitter.com/Faby_1DFam/status/944299834722410496/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "small": {
                    "w": 453,
                    "h": 680,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 800,
                    "h": 1200,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 800,
                    "h": 1200,
                    "resize": "fit"
                  }
                }
              },
              {
                "id": 944299658368741400,
                "id_str": "944299658368741377",
                "indices": [
                  35,
                  58
                ],
                "media_url": "http://pbs.twimg.com/media/DRrTiUKXcAEAAbv.jpg",
                "media_url_https": "https://pbs.twimg.com/media/DRrTiUKXcAEAAbv.jpg",
                "url": "https://t.co/lWknMA4Kse",
                "display_url": "pic.twitter.com/lWknMA4Kse",
                "expanded_url": "https://twitter.com/Faby_1DFam/status/944299834722410496/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 707,
                    "h": 1200,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 401,
                    "h": 680,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 707,
                    "h": 1200,
                    "resize": "fit"
                  }
                }
              },
              {
                "id": 944299679688339500,
                "id_str": "944299679688339456",
                "indices": [
                  35,
                  58
                ],
                "media_url": "http://pbs.twimg.com/media/DRrTjjlWsAAiKU8.jpg",
                "media_url_https": "https://pbs.twimg.com/media/DRrTjjlWsAAiKU8.jpg",
                "url": "https://t.co/lWknMA4Kse",
                "display_url": "pic.twitter.com/lWknMA4Kse",
                "expanded_url": "https://twitter.com/Faby_1DFam/status/944299834722410496/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 800,
                    "h": 1200,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 800,
                    "h": 1200,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 453,
                    "h": 680,
                    "resize": "fit"
                  }
                }
              },
              {
                "id": 944299699267391500,
                "id_str": "944299699267391488",
                "indices": [
                  35,
                  58
                ],
                "media_url": "http://pbs.twimg.com/media/DRrTkshXUAA_1LH.jpg",
                "media_url_https": "https://pbs.twimg.com/media/DRrTkshXUAA_1LH.jpg",
                "url": "https://t.co/lWknMA4Kse",
                "display_url": "pic.twitter.com/lWknMA4Kse",
                "expanded_url": "https://twitter.com/Faby_1DFam/status/944299834722410496/photo/1",
                "type": "photo",
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "large": {
                    "w": 800,
                    "h": 650,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 800,
                    "h": 650,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 553,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 77,
          "favorite_count": 140,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 77,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme9/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme9/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/942741958618791936/b1-8Qn_Y_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/942741958618791936/b1-8Qn_Y_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/183567718/1510939213",
      "profile_link_color": "ABB8C2",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 15872418,
      "id_str": "15872418",
      "name": "ABS-CBN News",
      "screen_name": "ABSCBNNews",
      "location": "Manila, Philippines",
      "description": "Stories, video, and multimedia for Filipinos worldwide, from ABS-CBN News and Current Affairs, the Philippines' most trusted news organization.",
      "url": "https://t.co/e2NDE5Oyaa",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/e2NDE5Oyaa",
              "expanded_url": "http://www.news.abs-cbn.com",
              "display_url": "news.abs-cbn.com",
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
      "followers_count": 5671674,
      "friends_count": 1307,
      "listed_count": 7361,
      "created_at": "Sat Aug 16 10:09:33 +0000 2008",
      "favourites_count": 889,
      "utc_offset": 28800,
      "time_zone": "Singapore",
      "geo_enabled": true,
      "verified": true,
      "statuses_count": 554335,
      "lang": "en",
      "status": {
        "created_at": "Sun Dec 24 11:04:30 +0000 2017",
        "id": 944886498272297000,
        "id_str": "944886498272296961",
        "text": "RT @bayanmo: Sukat man ay magkakaiba, iisang eksena ang ating makikita -- ang kapanganakan ni Hesus! Ang theme para sa Day 6 ay BELEN! #Pas…",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "bayanmo",
              "name": "Bayan Mo, Ipatrol Mo",
              "id": 69251421,
              "id_str": "69251421",
              "indices": [
                3,
                11
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
          "created_at": "Sun Dec 24 11:00:02 +0000 2017",
          "id": 944885374190571500,
          "id_str": "944885374190571521",
          "text": "Sukat man ay magkakaiba, iisang eksena ang ating makikita -- ang kapanganakan ni Hesus! Ang theme para sa Day 6 ay… https://t.co/9qEdsO1fFs",
          "truncated": true,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
              {
                "url": "https://t.co/9qEdsO1fFs",
                "expanded_url": "https://twitter.com/i/web/status/944885374190571521",
                "display_url": "twitter.com/i/web/status/9…",
                "indices": [
                  116,
                  139
                ]
              }
            ]
          },
          "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 1,
          "favorite_count": 2,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "tl"
        },
        "is_quote_status": false,
        "retweet_count": 1,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "tl"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/223757174/backgroundnew_3.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/223757174/backgroundnew_3.jpg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/595786514883284994/imtdEbVC_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/595786514883284994/imtdEbVC_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/15872418/1512634206",
      "profile_link_color": "006BB3",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "CACACE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "regular"
    },
    {
      "id": 889426817492242400,
      "id_str": "889426817492242433",
      "name": "Jose Ramon Villarin",
      "screen_name": "FrJett",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 8660,
      "friends_count": 11,
      "listed_count": 7,
      "created_at": "Mon Jul 24 10:07:32 +0000 2017",
      "favourites_count": 55,
      "utc_offset": 28800,
      "time_zone": "Hong Kong",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 222,
      "lang": "en",
      "status": {
        "created_at": "Thu Dec 21 08:03:12 +0000 2017",
        "id": 943753706452824000,
        "id_str": "943753706452824064",
        "text": "finally, \"weeded\" is out! 😀 available at the ff:\n* Tanging Yaman Store, Sonolux Bldg., ADMU campus (open till 23 De… https://t.co/J5QC5WmxCD",
        "truncated": true,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": [
            {
              "url": "https://t.co/J5QC5WmxCD",
              "expanded_url": "https://twitter.com/i/web/status/943753706452824064",
              "display_url": "twitter.com/i/web/status/9…",
              "indices": [
                117,
                140
              ]
            }
          ]
        },
        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 21,
        "favorite_count": 197,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/889427830043320320/48JFQuZT_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/889427830043320320/48JFQuZT_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/889426817492242433/1500891291",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    },
    {
      "id": 3305141232,
      "id_str": "3305141232",
      "name": "Vince Vertulfo",
      "screen_name": "jvincevertulfo",
      "location": "Bohol | Manila",
      "description": "become better, you attract better",
      "url": "https://t.co/pj3BcBtZv5",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/pj3BcBtZv5",
              "expanded_url": "http://comingsoon.com",
              "display_url": "comingsoon.com",
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
      "followers_count": 322,
      "friends_count": 386,
      "listed_count": 1,
      "created_at": "Mon Aug 03 13:53:02 +0000 2015",
      "favourites_count": 2603,
      "utc_offset": 28800,
      "time_zone": "Asia/Manila",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 6657,
      "lang": "en",
      "status": {
        "created_at": "Sun Dec 24 11:06:03 +0000 2017",
        "id": 944886884760674300,
        "id_str": "944886884760674304",
        "text": "hayup sa ganda 😍",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "es"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/939772008065204225/vMuDcmuH_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/939772008065204225/vMuDcmuH_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/3305141232/1504966824",
      "profile_link_color": "1B95E0",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    }
  ]

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
