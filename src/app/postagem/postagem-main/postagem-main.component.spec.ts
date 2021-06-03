import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemMainComponent } from './postagem-main.component';

describe('PostagemMainComponent', () => {
  let component: PostagemMainComponent;
  let fixture: ComponentFixture<PostagemMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
