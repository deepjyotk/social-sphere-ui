import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTweetDialogComponent } from './add-tweet-dialog.component';

describe('AddTweetDialogComponent', () => {
  let component: AddTweetDialogComponent;
  let fixture: ComponentFixture<AddTweetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTweetDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTweetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
