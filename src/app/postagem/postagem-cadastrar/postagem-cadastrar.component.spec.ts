import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemCadastrarComponent } from './postagem-cadastrar.component';

describe('PostagemCadastrarComponent', () => {
  let component: PostagemCadastrarComponent;
  let fixture: ComponentFixture<PostagemCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
