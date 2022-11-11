import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodSaveComponent } from './period-save.component';

describe('PeriodSaveComponent', () => {
  let component: PeriodSaveComponent;
  let fixture: ComponentFixture<PeriodSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
