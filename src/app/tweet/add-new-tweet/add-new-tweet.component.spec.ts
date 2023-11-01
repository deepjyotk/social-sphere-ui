import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTweetComponent } from './add-new-tweet.component';

describe('AddNewTweetComponent', () => {
  let component: AddNewTweetComponent;
  let fixture: ComponentFixture<AddNewTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
