import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemEditarComponent } from './postagem-editar.component';

describe('PostagemEditarComponent', () => {
  let component: PostagemEditarComponent;
  let fixture: ComponentFixture<PostagemEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
