import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoMainComponent } from './curso-main.component';

describe('CursoMainComponent', () => {
  let component: CursoMainComponent;
  let fixture: ComponentFixture<CursoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
