import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneCadastrarComponent } from './telefone-cadastrar.component';

describe('TelefoneCadastrarComponent', () => {
  let component: TelefoneCadastrarComponent;
  let fixture: ComponentFixture<TelefoneCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoneCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
