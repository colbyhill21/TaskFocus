import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SettingsModalComponent } from './settings-modal.component';
import 'hammerjs';

describe('SettingsModalComponent', () => {
  let component: SettingsModalComponent;
  let fixture: ComponentFixture<SettingsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsModalComponent],
      imports: [
        MatSliderModule,
        MatSlideToggleModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsModalComponent);
    component = fixture.componentInstance;
    component.timerSettings = { 
        focusLength: 25,
        shortBreakLength: 5,
        longBreakLength: 10,
        longBreakInterval: 4,
        autoStartTimer: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
