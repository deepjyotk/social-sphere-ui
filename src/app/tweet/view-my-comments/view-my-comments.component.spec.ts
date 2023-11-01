import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyCommentsComponent } from './view-my-comments.component';

describe('ViewMyCommentsComponent', () => {
  let component: ViewMyCommentsComponent;
  let fixture: ComponentFixture<ViewMyCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
