import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllTweetsComponent } from './show-all-tweets.component';

describe('ShowAllTweetsComponent', () => {
  let component: ShowAllTweetsComponent;
  let fixture: ComponentFixture<ShowAllTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
