import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetalleComponent } from './productdetalle.component';

describe('ProductdetalleComponent', () => {
  let component: ProductdetalleComponent;
  let fixture: ComponentFixture<ProductdetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdetalleComponent]
    });
    fixture = TestBed.createComponent(ProductdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
