import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferedComponent } from './defered.component';

describe('DeferedComponent', () => {
  let component: DeferedComponent;
  let fixture: ComponentFixture<DeferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
