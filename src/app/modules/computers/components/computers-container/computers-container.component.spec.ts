import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputersContainerComponent } from './computers-container.component';

describe('ComputersContainerComponent', () => {
  let component: ComputersContainerComponent;
  let fixture: ComponentFixture<ComputersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputersContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
