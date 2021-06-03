import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestranteDeletarComponent } from './palestrante-deletar.component';

describe('PalestranteDeletarComponent', () => {
  let component: PalestranteDeletarComponent;
  let fixture: ComponentFixture<PalestranteDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalestranteDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalestranteDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
