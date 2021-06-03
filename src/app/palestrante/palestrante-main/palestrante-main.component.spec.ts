import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestranteMainComponent } from './palestrante-main.component';

describe('PalestranteMainComponent', () => {
  let component: PalestranteMainComponent;
  let fixture: ComponentFixture<PalestranteMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalestranteMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalestranteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
