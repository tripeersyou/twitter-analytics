import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchTweetsComponent } from './search-tweets/search-tweets.component';
import { GetFollowersComponent } from './get-followers/get-followers.component';
import { UserComponent } from './user/user.component';
import { GetFollowingComponent } from './get-following/get-following.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  {
    path:'',
    component: SearchTweetsComponent
  },
  {
    path:'search-tweets',
    component: SearchTweetsComponent
  },
  {
    path: 'users',
    component: UserSearchComponent
  },
  {
    path:'users/:handle',
    component: UserComponent
  },
  {
    path: 'users/:handle/followers',
    component: GetFollowersComponent
  },
  {
    path: 'users/:handle/following',
    component: GetFollowingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
