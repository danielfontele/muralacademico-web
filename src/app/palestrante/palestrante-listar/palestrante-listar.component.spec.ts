import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestranteListarComponent } from './palestrante-listar.component';

describe('PalestranteListarComponent', () => {
  let component: PalestranteListarComponent;
  let fixture: ComponentFixture<PalestranteListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalestranteListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalestranteListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
