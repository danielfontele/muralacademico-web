import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoListarComponent } from './endereco-listar.component';

describe('EnderecoListarComponent', () => {
  let component: EnderecoListarComponent;
  let fixture: ComponentFixture<EnderecoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
