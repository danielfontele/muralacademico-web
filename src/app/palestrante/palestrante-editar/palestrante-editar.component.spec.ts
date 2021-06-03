import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestranteEditarComponent } from './palestrante-editar.component';

describe('PalestranteEditarComponent', () => {
  let component: PalestranteEditarComponent;
  let fixture: ComponentFixture<PalestranteEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalestranteEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalestranteEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
