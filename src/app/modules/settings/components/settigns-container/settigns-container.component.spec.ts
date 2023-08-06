import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettignsContainerComponent } from './settigns-container.component';

describe('SettignsContainerComponent', () => {
  let component: SettignsContainerComponent;
  let fixture: ComponentFixture<SettignsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettignsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettignsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
