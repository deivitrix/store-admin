import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseHomeComponent } from './base-home.component';

describe('BaseHomeComponent', () => {
  let component: BaseHomeComponent;
  let fixture: ComponentFixture<BaseHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseHomeComponent]
    });
    fixture = TestBed.createComponent(BaseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
