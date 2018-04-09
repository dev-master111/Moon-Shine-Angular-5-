import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictBarComponent } from './conflict-bar.component';
import { ColorizeMvsCsService } from '../../services/colorize-mvs-cs.service';

describe('ConflictBarComponent', () => {
  let component: ConflictBarComponent;
  let fixture: ComponentFixture<ConflictBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConflictBarComponent ],
      providers: [ ColorizeMvsCsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConflictBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
