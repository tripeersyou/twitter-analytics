import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFollowersComponent } from './get-followers.component';

describe('GetFollowersComponent', () => {
  let component: GetFollowersComponent;
  let fixture: ComponentFixture<GetFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
