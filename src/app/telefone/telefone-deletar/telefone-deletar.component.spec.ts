import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneDeletarComponent } from './telefone-deletar.component';

describe('TelefoneDeletarComponent', () => {
  let component: TelefoneDeletarComponent;
  let fixture: ComponentFixture<TelefoneDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoneDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
