import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsContainerComponent } from './item-details-container.component';

describe('ItemDetailsContainerComponent', () => {
  let component: ItemDetailsContainerComponent;
  let fixture: ComponentFixture<ItemDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
