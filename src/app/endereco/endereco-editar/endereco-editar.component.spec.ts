import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoEditarComponent } from './endereco-editar.component';

describe('EnderecoEditarComponent', () => {
  let component: EnderecoEditarComponent;
  let fixture: ComponentFixture<EnderecoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
