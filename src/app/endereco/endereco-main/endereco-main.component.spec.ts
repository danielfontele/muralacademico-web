import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoMainComponent } from './endereco-main.component';

describe('EnderecoMainComponent', () => {
  let component: EnderecoMainComponent;
  let fixture: ComponentFixture<EnderecoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
