import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { StatsModalComponent } from './stats-modal.component';

describe('StatsModalComponent', () => {
  let component: StatsModalComponent;
  let fixture: ComponentFixture<StatsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsModalComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsModalComponent);
    component = fixture.componentInstance;
    component.metrics = {
        numFocus: 0,
        numShortBreak: 0,
        numLongBreak: 0
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
