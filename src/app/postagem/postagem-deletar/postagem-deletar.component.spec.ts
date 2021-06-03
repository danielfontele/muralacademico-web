import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemDeletarComponent } from './postagem-deletar.component';

describe('PostagemDeletarComponent', () => {
  let component: PostagemDeletarComponent;
  let fixture: ComponentFixture<PostagemDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
