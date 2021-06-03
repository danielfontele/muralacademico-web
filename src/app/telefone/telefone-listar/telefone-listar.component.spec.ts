import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneListarComponent } from './telefone-listar.component';

describe('TelefoneListarComponent', () => {
  let component: TelefoneListarComponent;
  let fixture: ComponentFixture<TelefoneListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoneListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
