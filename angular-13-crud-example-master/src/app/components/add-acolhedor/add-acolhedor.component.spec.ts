import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcolhedorComponent } from './add-acolhedor.component';

describe('AddAcolhedorComponent', () => {
  let component: AddAcolhedorComponent;
  let fixture: ComponentFixture<AddAcolhedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAcolhedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcolhedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
