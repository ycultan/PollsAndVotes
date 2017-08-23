import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPollComponent } from './show-poll.component';

describe('ShowPollComponent', () => {
  let component: ShowPollComponent;
  let fixture: ComponentFixture<ShowPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
