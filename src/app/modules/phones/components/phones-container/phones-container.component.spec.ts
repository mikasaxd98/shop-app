import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesContainerComponent } from './phones-container.component';

describe('PhonesContainerComponent', () => {
  let component: PhonesContainerComponent;
  let fixture: ComponentFixture<PhonesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonesContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
