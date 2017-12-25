import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchTweetsComponent } from './search-tweets/search-tweets.component';
import { TwitterApiService } from "./twitter-api.service";
import { HttpModule } from '@angular/http';
import { GetFollowersComponent } from './get-followers/get-followers.component';
import { UserComponent } from './user/user.component';
import { GetFollowingComponent } from './get-following/get-following.component';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchTweetsComponent,
    GetFollowersComponent,
    UserComponent,
    GetFollowingComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TwitterApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
