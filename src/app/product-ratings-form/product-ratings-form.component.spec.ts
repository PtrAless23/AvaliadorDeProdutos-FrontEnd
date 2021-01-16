import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRatingsFormComponent } from './product-ratings-form.component';

describe('ProductRatingsFormComponent', () => {
  let component: ProductRatingsFormComponent;
  let fixture: ComponentFixture<ProductRatingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRatingsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRatingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
