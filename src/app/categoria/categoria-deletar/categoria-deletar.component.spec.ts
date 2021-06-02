import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDeletarComponent } from './categoria-deletar.component';

describe('CategoriaDeletarComponent', () => {
  let component: CategoriaDeletarComponent;
  let fixture: ComponentFixture<CategoriaDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
