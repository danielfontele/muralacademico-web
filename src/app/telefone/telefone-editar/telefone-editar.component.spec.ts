import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneEditarComponent } from './telefone-editar.component';

describe('TelefoneEditarComponent', () => {
  let component: TelefoneEditarComponent;
  let fixture: ComponentFixture<TelefoneEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoneEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
