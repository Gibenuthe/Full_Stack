import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAcolhedorComponent } from './lista-acolhedor.component';

describe('ListaAcolhedorComponent', () => {
  let component: ListaAcolhedorComponent;
  let fixture: ComponentFixture<ListaAcolhedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAcolhedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAcolhedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
