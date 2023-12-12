import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseProductComponent } from './base-product.component';

describe('BaseProductComponent', () => {
  let component: BaseProductComponent;
  let fixture: ComponentFixture<BaseProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseProductComponent]
    });
    fixture = TestBed.createComponent(BaseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
