import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExtraComponent } from './product-extra.component';

describe('ProductExtraComponent', () => {
  let component: ProductExtraComponent;
  let fixture: ComponentFixture<ProductExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductExtraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
