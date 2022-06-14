import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAcolhedorComponent } from './dados-acolhedor.component';

describe('DadosAcolhedorComponent', () => {
  let component: DadosAcolhedorComponent;
  let fixture: ComponentFixture<DadosAcolhedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosAcolhedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAcolhedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
