import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDeletarComponent } from './curso-deletar.component';

describe('CursoDeletarComponent', () => {
  let component: CursoDeletarComponent;
  let fixture: ComponentFixture<CursoDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
