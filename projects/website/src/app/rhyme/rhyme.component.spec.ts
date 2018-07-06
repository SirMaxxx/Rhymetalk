import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhymeComponent } from './rhyme.component';

describe('RhymeComponent', () => {
  let component: RhymeComponent;
  let fixture: ComponentFixture<RhymeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhymeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
