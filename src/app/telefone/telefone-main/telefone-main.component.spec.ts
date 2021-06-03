import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneMainComponent } from './telefone-main.component';

describe('TelefoneMainComponent', () => {
  let component: TelefoneMainComponent;
  let fixture: ComponentFixture<TelefoneMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoneMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
