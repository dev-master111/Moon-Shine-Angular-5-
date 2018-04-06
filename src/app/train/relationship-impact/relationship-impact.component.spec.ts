import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipImpactComponent } from './relationship-impact.component';

describe('RelationshipImpactComponent', () => {
  let component: RelationshipImpactComponent;
  let fixture: ComponentFixture<RelationshipImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationshipImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
