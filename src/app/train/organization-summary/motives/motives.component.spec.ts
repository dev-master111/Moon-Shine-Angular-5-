import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivesComponent } from './motives.component';

describe('MotivesComponent', () => {
  let component: MotivesComponent;
  let fixture: ComponentFixture<MotivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
