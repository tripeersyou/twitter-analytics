import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  handle: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchUser(){
    this.router.navigate([`users/${this.handle}`]);
  }

}
