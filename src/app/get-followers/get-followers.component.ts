import { Component, OnInit } from '@angular/core';
import { TwitterApiService } from '../twitter-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-followers',
  templateUrl: './get-followers.component.html',
  styleUrls: ['./get-followers.component.scss']
})
export class GetFollowersComponent implements OnInit {

  handle: string;
  followers = [
    {
      "id": 2860898992,
      "id_str": "2860898992",
      "name": "James Corneille",
      "screen_name": "JamesCorneille",
      "location": "Pluto",
      "description": "19 y/o Irish Entrepreneur, building brands & voices with @IndivMedia | 19 Awards",
      "url": "https://t.co/JS3WENIZqZ",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/JS3WENIZqZ",
              "expanded_url": "http://youtube.com/JamesCorneille?sub_confirmation=1",
              "display_url": "youtube.com/JamesCorneille…",
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
      "followers_count": 390876,
      "friends_count": 26759,
      "listed_count": 1644,
      "created_at": "Tue Nov 04 15:34:34 +0000 2014",
      "favourites_count": 38075,
      "utc_offset": 0,
      "time_zone": "Dublin",
      "geo_enabled": true,
      "verified": true,
      "statuses_count": 44,
      "lang": "en",
      "status": {
        "created_at": "Wed Dec 13 12:59:34 +0000 2017",
        "id": 940929186541244400,
        "id_str": "940929186541244416",
        "text": "RT @Kardash_crisis: Over 3,000 children in Ireland are without a home. Help us make a difference &amp; eliminate poverty. If this tweet reaches…",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "Kardash_crisis",
              "name": "TY SciFest #EliminatePoverty",
              "id": 922424726097670100,
              "id_str": "922424726097670144",
              "indices": [
                3,
                18
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
          "created_at": "Thu Dec 07 19:48:27 +0000 2017",
          "id": 938857756966162400,
          "id_str": "938857756966162432",
          "text": "Over 3,000 children in Ireland are without a home. Help us make a difference &amp; eliminate poverty. If this tweet rea… https://t.co/a2zR3LiteS",
          "truncated": true,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
              {
                "url": "https://t.co/a2zR3LiteS",
                "expanded_url": "https://twitter.com/i/web/status/938857756966162432",
                "display_url": "twitter.com/i/web/status/9…",
                "indices": [
                  121,
                  144
                ]
              }
            ]
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
          "retweet_count": 712,
          "favorite_count": 1239,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 712,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/938890419408121857/SqG0USvH_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/938890419408121857/SqG0USvH_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2860898992/1512856906",
      "profile_link_color": "000000",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
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
      "followers_count": 1009,
      "friends_count": 1648,
      "listed_count": 60,
      "created_at": "Sat Aug 07 11:22:22 +0000 2010",
      "favourites_count": 4484,
      "utc_offset": 28800,
      "time_zone": "Beijing",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 3500,
      "lang": "en",
      "status": {
        "created_at": "Fri Dec 22 07:00:41 +0000 2017",
        "id": 944100360959901700,
        "id_str": "944100360959901696",
        "text": "So I jwu because I slept 630am",
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
        "favorite_count": 2,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
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
      "id": 941167372999651300,
      "id_str": "941167372999651328",
      "name": "Alex puzon",
      "screen_name": "alex_puzon",
      "location": "Quezon City ",
      "description": "Truck driver",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1,
      "friends_count": 68,
      "listed_count": 0,
      "created_at": "Thu Dec 14 04:46:02 +0000 2017",
      "favourites_count": 0,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 40,
      "lang": "en",
      "status": {
        "created_at": "Tue Dec 19 05:33:55 +0000 2017",
        "id": 942991363443802100,
        "id_str": "942991363443802114",
        "text": "https://t.co/VZkepr5EII",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": [],
          "media": [
            {
              "id": 942991312931848200,
              "id_str": "942991312931848192",
              "indices": [
                0,
                23
              ],
              "media_url": "http://pbs.twimg.com/media/DRYtmlmVAAAEKFR.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRYtmlmVAAAEKFR.jpg",
              "url": "https://t.co/VZkepr5EII",
              "display_url": "pic.twitter.com/VZkepr5EII",
              "expanded_url": "https://twitter.com/alex_puzon/status/942991363443802114/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 2048,
                  "h": 1536,
                  "resize": "fit"
                },
                "medium": {
                  "w": 1200,
                  "h": 900,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 510,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 942991312931848200,
              "id_str": "942991312931848192",
              "indices": [
                0,
                23
              ],
              "media_url": "http://pbs.twimg.com/media/DRYtmlmVAAAEKFR.jpg",
              "media_url_https": "https://pbs.twimg.com/media/DRYtmlmVAAAEKFR.jpg",
              "url": "https://t.co/VZkepr5EII",
              "display_url": "pic.twitter.com/VZkepr5EII",
              "expanded_url": "https://twitter.com/alex_puzon/status/942991363443802114/photo/1",
              "type": "photo",
              "sizes": {
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 2048,
                  "h": 1536,
                  "resize": "fit"
                },
                "medium": {
                  "w": 1200,
                  "h": 900,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 510,
                  "resize": "fit"
                }
              }
            }
          ]
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
        "possibly_sensitive": false,
        "lang": "und"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/941168626735788034/5t-2xaeu_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/941168626735788034/5t-2xaeu_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/941167372999651328/1513227060",
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
      "id": 89018724,
      "id_str": "89018724",
      "name": "Edgar Barron",
      "screen_name": "edgarbarron",
      "location": "Hernando, MS",
      "description": "find me on facebook",
      "url": "http://t.co/H9tWMOLt",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/H9tWMOLt",
              "expanded_url": "http://www.facebook.com/barronedgar",
              "display_url": "facebook.com/barronedgar",
              "indices": [
                0,
                20
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 351,
      "friends_count": 1423,
      "listed_count": 1,
      "created_at": "Tue Nov 10 20:52:45 +0000 2009",
      "favourites_count": 35,
      "utc_offset": -21600,
      "time_zone": "Central Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 246,
      "lang": "en",
      "status": {
        "created_at": "Sat Dec 09 23:02:01 +0000 2017",
        "id": 939631246166167600,
        "id_str": "939631246166167553",
        "text": "RT @AutoZoneCareers: AutoZone  - Retail Manager #Angleton #Jobs https://t.co/XZtRyf8wKm",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "Angleton",
              "indices": [
                48,
                57
              ]
            },
            {
              "text": "Jobs",
              "indices": [
                58,
                63
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "AutoZoneCareers",
              "name": "AutoZone_Careers",
              "id": 2923159115,
              "id_str": "2923159115",
              "indices": [
                3,
                19
              ]
            }
          ],
          "urls": [
            {
              "url": "https://t.co/XZtRyf8wKm",
              "expanded_url": "http://clm.bz/f5feKN",
              "display_url": "clm.bz/f5feKN",
              "indices": [
                64,
                87
              ]
            }
          ]
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
          "created_at": "Thu Dec 07 19:40:17 +0000 2017",
          "id": 938855702730330100,
          "id_str": "938855702730330112",
          "text": "AutoZone  - Retail Manager #Angleton #Jobs https://t.co/XZtRyf8wKm",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "Angleton",
                "indices": [
                  27,
                  36
                ]
              },
              {
                "text": "Jobs",
                "indices": [
                  37,
                  42
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [
              {
                "url": "https://t.co/XZtRyf8wKm",
                "expanded_url": "http://clm.bz/f5feKN",
                "display_url": "clm.bz/f5feKN",
                "indices": [
                  43,
                  66
                ]
              }
            ]
          },
          "source": "<a href=\"http://Postings.com\" rel=\"nofollow\">Postings.com</a>",
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
          "favorite_count": 1,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 1,
        "favorite_count": 0,
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
      "profile_image_url": "http://pbs.twimg.com/profile_images/769687572012498944/fsscVgIJ_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/769687572012498944/fsscVgIJ_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/89018724/1425046127",
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
      "id": 196415460,
      "id_str": "196415460",
      "name": "Daniel Newmaη",
      "screen_name": "DanielNewman",
      "location": "iTunes / Spotify / FACEBOOK",
      "description": "#ATL! Thanks WALKING DEAD fans for your ❤ for my new character! #LGBTQ. MESSAGE me on https://t.co/ibkMeFnbKp\n** I FOLLOW BACK! https://t.co/GXd7vBAfgl",
      "url": "https://t.co/tMu0LZ7EWT",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/tMu0LZ7EWT",
              "expanded_url": "http://www.INSTAGRAM.com/DanielNewman_",
              "display_url": "INSTAGRAM.com/DanielNewman_",
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
              "url": "https://t.co/ibkMeFnbKp",
              "expanded_url": "http://INSTAGRAM.com/DANIELNEWMAN_",
              "display_url": "INSTAGRAM.com/DANIELNEWMAN_",
              "indices": [
                86,
                109
              ]
            },
            {
              "url": "https://t.co/GXd7vBAfgl",
              "expanded_url": "http://SNAPCHAT.com/add/TheMrNewman",
              "display_url": "SNAPCHAT.com/add/TheMrNewman",
              "indices": [
                128,
                151
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 1099519,
      "friends_count": 917787,
      "listed_count": 2573,
      "created_at": "Wed Sep 29 01:50:02 +0000 2010",
      "favourites_count": 61545,
      "utc_offset": -18000,
      "time_zone": "Eastern Time (US & Canada)",
      "geo_enabled": true,
      "verified": true,
      "statuses_count": 22047,
      "lang": "en",
      "status": {
        "created_at": "Sat Dec 23 09:03:44 +0000 2017",
        "id": 944493716810715100,
        "id_str": "944493716810715137",
        "text": "Just posted a photo https://t.co/W3VDK48cFO",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": [
            {
              "url": "https://t.co/W3VDK48cFO",
              "expanded_url": "https://www.instagram.com/p/BdCf4F5leRm/",
              "display_url": "instagram.com/p/BdCf4F5leRm/",
              "indices": [
                20,
                43
              ]
            }
          ]
        },
        "source": "<a href=\"http://instagram.com\" rel=\"nofollow\">Instagram</a>",
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
        "retweet_count": 15,
        "favorite_count": 59,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "1A1B1F",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme9/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme9/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/839126271632224256/qzKg9hC7_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/839126271632224256/qzKg9hC7_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/196415460/1511556537",
      "profile_link_color": "2FC2EF",
      "profile_sidebar_border_color": "181A1E",
      "profile_sidebar_fill_color": "252429",
      "profile_text_color": "666666",
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
      "id": 736139651316994000,
      "id_str": "736139651316994048",
      "name": "—",
      "screen_name": "xxfvxxrogacion",
      "location": "tesoro lang",
      "description": "forever lodibabes, @carljustineteso",
      "url": "https://t.co/O5DuoGKVdg",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/O5DuoGKVdg",
              "expanded_url": "https://ask.fm/FrancineRogacion?utm_source=copy_link&utm_medium=iOS",
              "display_url": "ask.fm/FrancineRogaci…",
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
      "followers_count": 783,
      "friends_count": 866,
      "listed_count": 3,
      "created_at": "Fri May 27 10:19:04 +0000 2016",
      "favourites_count": 4207,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 11839,
      "lang": "en",
      "status": {
        "created_at": "Sat Dec 23 10:16:54 +0000 2017",
        "id": 944512129884758000,
        "id_str": "944512129884758016",
        "text": "akala ko nung una matino ka, di pala",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": []
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
        "retweet_count": 1,
        "favorite_count": 1,
        "favorited": false,
        "retweeted": false,
        "lang": "tl"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/944219545564151808/SCW9jLQM_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/944219545564151808/SCW9jLQM_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/736139651316994048/1513934252",
      "profile_link_color": "F58EA8",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
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
      "id": 918993543007412200,
      "id_str": "918993543007412224",
      "name": "Stanford",
      "screen_name": "_jstanford__",
      "location": "",
      "description": "Deoxyriboncleic acid",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 73,
      "friends_count": 3370,
      "listed_count": 0,
      "created_at": "Sat Oct 14 00:15:09 +0000 2017",
      "favourites_count": 1256,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 12,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/922789586434121731/8akIUufB_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/922789586434121731/8akIUufB_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/918993543007412224/1507942808",
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
      "id": 770226595764187100,
      "id_str": "770226595764187136",
      "name": "lodi",
      "screen_name": "super_curtt",
      "location": "kung saan madameng pagkaen",
      "description": "| XII XI | ig: @super_curtt",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 281,
      "friends_count": 1305,
      "listed_count": 0,
      "created_at": "Mon Aug 29 11:48:25 +0000 2016",
      "favourites_count": 996,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 2053,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/944439967580790784/bjHCnUY1_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/944439967580790784/bjHCnUY1_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/770226595764187136/1502360568",
      "profile_link_color": "784452",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
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
      "followers_count": 448,
      "friends_count": 540,
      "listed_count": 3,
      "created_at": "Sat Jun 29 11:54:07 +0000 2013",
      "favourites_count": 6286,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 11048,
      "lang": "en",
      "status": {
        "created_at": "Fri Dec 22 16:57:21 +0000 2017",
        "id": 944250517458321400,
        "id_str": "944250517458321411",
        "text": "RT @andrelagdameo: PLEASE SPREAD THE WORD.\n\nIca Policarpio has been missing since 10:53pm at Coffee Project, Lakefront near Sucat. She was…",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "andrelagdameo",
              "name": "Andr the Mistletoe 🎄",
              "id": 59760300,
              "id_str": "59760300",
              "indices": [
                3,
                17
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
          "created_at": "Fri Dec 22 04:08:16 +0000 2017",
          "id": 944056971530985500,
          "id_str": "944056971530985472",
          "text": "PLEASE SPREAD THE WORD.\n\nIca Policarpio has been missing since 10:53pm at Coffee Project, Lakefront near Sucat. She… https://t.co/D8hJK0qkAO",
          "truncated": true,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
              {
                "url": "https://t.co/D8hJK0qkAO",
                "expanded_url": "https://twitter.com/i/web/status/944056971530985472",
                "display_url": "twitter.com/i/web/status/9…",
                "indices": [
                  117,
                  140
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
          "retweet_count": 9682,
          "favorite_count": 3683,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 9682,
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
      "id": 2789428932,
      "id_str": "2789428932",
      "name": "Jacklyn",
      "screen_name": "_jacklynpineda",
      "location": "",
      "description": "ua",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 390,
      "friends_count": 465,
      "listed_count": 0,
      "created_at": "Thu Sep 04 09:25:07 +0000 2014",
      "favourites_count": 903,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 1073,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/939772758656876544/S70wZC1W_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/939772758656876544/S70wZC1W_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2789428932/1507025203",
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
      "id": 926763646100713500,
      "id_str": "926763646100713472",
      "name": "Troy",
      "screen_name": "trroooyyyy_",
      "location": "in your heart❤️",
      "description": "bad boy na kung bad boy😉🖕",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 28,
      "friends_count": 380,
      "listed_count": 0,
      "created_at": "Sat Nov 04 10:50:46 +0000 2017",
      "favourites_count": 312,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 101,
      "lang": "en",
      "status": {
        "created_at": "Sat Dec 23 10:00:47 +0000 2017",
        "id": 944508072273199100,
        "id_str": "944508072273199104",
        "text": "RT @EcaVargas: daming oras na nasasayang sa maling tao",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "EcaVargas",
              "name": ";",
              "id": 3689261412,
              "id_str": "3689261412",
              "indices": [
                3,
                13
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
          "created_at": "Thu Dec 21 13:27:16 +0000 2017",
          "id": 943835261816811500,
          "id_str": "943835261816811522",
          "text": "daming oras na nasasayang sa maling tao",
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
          "retweet_count": 1268,
          "favorite_count": 2352,
          "favorited": false,
          "retweeted": false,
          "lang": "tl"
        },
        "is_quote_status": false,
        "retweet_count": 1268,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "tl"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/926768100858408961/HsKib_bk_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/926768100858408961/HsKib_bk_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/926763646100713472/1509793284",
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
      "favourites_count": 3046,
      "utc_offset": 28800,
      "time_zone": "Hong Kong",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 6383,
      "lang": "en",
      "status": {
        "created_at": "Sat Dec 23 09:32:41 +0000 2017",
        "id": 944501001741987800,
        "id_str": "944501001741987840",
        "text": "Feelings crashing down on me",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
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
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
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
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/418344551/1513351082",
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
      "id": 921547325612351500,
      "id_str": "921547325612351489",
      "name": "kyah_E U L Y 💙🤘",
      "screen_name": "kyah_euly1025",
      "location": "R💕",
      "description": "Don't panic it's organic",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 111,
      "friends_count": 194,
      "listed_count": 0,
      "created_at": "Sat Oct 21 01:22:58 +0000 2017",
      "favourites_count": 391,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 122,
      "lang": "en",
      "status": {
        "created_at": "Sat Dec 23 07:43:01 +0000 2017",
        "id": 944473401644552200,
        "id_str": "944473401644552192",
        "text": "RT @itsJunnieBoy: MAGIIPON NA KO SA 2018\nMAGIIPON NA KO SA 2018\nMAGIIPON NA KO SA 2018\nMAGIIPON NA KO SA 2018\nMAGIIPON NA KO SA 2018\nMAGIIP…",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "itsJunnieBoy",
              "name": "Junnie Boy",
              "id": 909069854245765100,
              "id_str": "909069854245765120",
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
          "created_at": "Thu Dec 21 09:46:25 +0000 2017",
          "id": 943779682259832800,
          "id_str": "943779682259832832",
          "text": "MAGIIPON NA KO SA 2018\nMAGIIPON NA KO SA 2018\nMAGIIPON NA KO SA 2018\nMAGIIPON NA KO SA 2018\nMAGIIPON NA KO SA 2018\nMAGIIPON NA KO SA 2018",
          "truncated": false,
          "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
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
          "is_quote_status": false,
          "retweet_count": 5440,
          "favorite_count": 6382,
          "favorited": false,
          "retweeted": false,
          "lang": "tl"
        },
        "is_quote_status": false,
        "retweet_count": 5440,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "tl"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/941623332750876672/yXBpLcgp_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/941623332750876672/yXBpLcgp_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/921547325612351489/1513389642",
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
      "id": 783868464121327600,
      "id_str": "783868464121327616",
      "name": "khris delacruz",
      "screen_name": "khris_dc",
      "location": "Bulacan",
      "description": "pogi",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 37,
      "friends_count": 163,
      "listed_count": 0,
      "created_at": "Thu Oct 06 03:16:20 +0000 2016",
      "favourites_count": 9,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 73,
      "lang": "en",
      "status": {
        "created_at": "Wed Dec 20 16:21:04 +0000 2017",
        "id": 943516611650003000,
        "id_str": "943516611650002944",
        "text": "Tuwing pasko lagi ako. Single tangina nakakahalata nako ah. Haha",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
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
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/918270721368846336/36JldGfK_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/918270721368846336/36JldGfK_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/783868464121327616/1507767777",
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
      "id": 2874491526,
      "id_str": "2874491526",
      "name": "kyla",
      "screen_name": "galurocks",
      "location": "Republic of the Philippines",
      "description": "l o s t",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 429,
      "friends_count": 541,
      "listed_count": 0,
      "created_at": "Fri Oct 24 03:59:22 +0000 2014",
      "favourites_count": 2621,
      "utc_offset": 25200,
      "time_zone": "Krasnoyarsk",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 4662,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "642D8B",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/627473252420456448/9veyi-_a.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/627473252420456448/9veyi-_a.jpg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/943757917286670336/xuU9WUkA_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/943757917286670336/xuU9WUkA_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2874491526/1513844331",
      "profile_link_color": "FF691F",
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
      "id": 488308556,
      "id_str": "488308556",
      "name": "Andre Sevilla",
      "screen_name": "AndreSevillaa",
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
      "friends_count": 379,
      "listed_count": 1,
      "created_at": "Fri Feb 10 09:41:59 +0000 2012",
      "favourites_count": 161,
      "utc_offset": 28800,
      "time_zone": "Beijing",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 45035,
      "lang": "en",
      "status": {
        "created_at": "Sat Dec 23 08:45:56 +0000 2017",
        "id": 944489235142152200,
        "id_str": "944489235142152193",
        "text": "@thejaredhu “accidentally”",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "thejaredhu",
              "name": "hu hu hu merry christmas 🎄",
              "id": 2805329635,
              "id_str": "2805329635",
              "indices": [
                0,
                11
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": 944446353316364300,
        "in_reply_to_status_id_str": "944446353316364288",
        "in_reply_to_user_id": 2805329635,
        "in_reply_to_user_id_str": "2805329635",
        "in_reply_to_screen_name": "thejaredhu",
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 2,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
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
      "id": 3626084960,
      "id_str": "3626084960",
      "name": "jom",
      "screen_name": "TheNotoriousJOM",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 3592,
      "friends_count": 1009,
      "listed_count": 0,
      "created_at": "Sun Sep 20 10:55:51 +0000 2015",
      "favourites_count": 2331,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 5976,
      "lang": "en",
      "status": {
        "created_at": "Fri Dec 22 11:22:21 +0000 2017",
        "id": 944166214464503800,
        "id_str": "944166214464503809",
        "text": "You might not want to commit to a set schedule because you bel... More for Aquarius https://t.co/9nYHnn16sh",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [],
          "urls": [
            {
              "url": "https://t.co/9nYHnn16sh",
              "expanded_url": "http://bit.ly/whBNNw",
              "display_url": "bit.ly/whBNNw",
              "indices": [
                84,
                107
              ]
            }
          ]
        },
        "source": "<a href=\"http://www.twittascope.com\" rel=\"nofollow\">Twittascope</a>",
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
        "lang": "en"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/920918344986910720/Vh7oxnot_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/920918344986910720/Vh7oxnot_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/3626084960/1497598680",
      "profile_link_color": "981CEB",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
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
      "id": 914799053702959100,
      "id_str": "914799053702959104",
      "name": "Bloodymer Chon",
      "screen_name": "BloodymerChon",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1,
      "friends_count": 195,
      "listed_count": 0,
      "created_at": "Mon Oct 02 10:27:45 +0000 2017",
      "favourites_count": 2,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 0,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
      "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": true,
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
      "id": 796554839215849500,
      "id_str": "796554839215849472",
      "name": "Otterly Adorable",
      "screen_name": "ottercuddle",
      "location": "",
      "description": "Otters are the cutest thing in the world ❤️",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 240,
      "friends_count": 1697,
      "listed_count": 0,
      "created_at": "Thu Nov 10 03:27:27 +0000 2016",
      "favourites_count": 18,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 1,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/919458289548533762/whWAyhwY_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/919458289548533762/whWAyhwY_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/796554839215849472/1508050947",
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
      "id": 902589793132888000,
      "id_str": "902589793132888065",
      "name": "Mansuripto Dani",
      "screen_name": "MansuriptoDani2",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 132,
      "friends_count": 1795,
      "listed_count": 0,
      "created_at": "Tue Aug 29 17:52:30 +0000 2017",
      "favourites_count": 4430,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 490,
      "lang": "id",
      "status": {
        "created_at": "Wed Oct 11 18:37:45 +0000 2017",
        "id": 918183858993893400,
        "id_str": "918183858993893376",
        "text": "@PuspaAdriana Hy cantik",
        "truncated": false,
        "entities": {
          "hashtags": [],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "PuspaAdriana",
              "name": "Puspa Adriana",
              "id": 847008850091794400,
              "id_str": "847008850091794432",
              "indices": [
                0,
                13
              ]
            }
          ],
          "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": 918180905860128800,
        "in_reply_to_status_id_str": "918180905860128768",
        "in_reply_to_user_id": 847008850091794400,
        "in_reply_to_user_id_str": "847008850091794432",
        "in_reply_to_screen_name": "PuspaAdriana",
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "in"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
      "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": true,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "translator_type": "none"
    }
  ];

  constructor(private twitterApiService: TwitterApiService, private route: ActivatedRoute) {

    this.route.params.subscribe((res)=>{
      this.handle = res.handle;
      console.log(res.handle);
    });

    this.twitterApiService.getFollowers(this.handle, 200).subscribe( res =>{
      this.followers = res;
      console.log(res);
    });

  }

  ngOnInit() {
  }


}
