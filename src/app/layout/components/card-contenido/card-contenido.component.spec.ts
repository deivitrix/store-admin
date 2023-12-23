import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContenidoComponent } from './card-contenido.component';

describe('CardContenidoComponent', () => {
  let component: CardContenidoComponent;
  let fixture: ComponentFixture<CardContenidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardContenidoComponent]
    });
    fixture = TestBed.createComponent(CardContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
