import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemListarComponent } from './postagem-listar.component';

describe('PostagemListarComponent', () => {
  let component: PostagemListarComponent;
  let fixture: ComponentFixture<PostagemListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
