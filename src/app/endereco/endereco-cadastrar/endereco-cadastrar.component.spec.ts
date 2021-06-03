import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoCadastrarComponent } from './endereco-cadastrar.component';

describe('EnderecoCadastrarComponent', () => {
  let component: EnderecoCadastrarComponent;
  let fixture: ComponentFixture<EnderecoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
