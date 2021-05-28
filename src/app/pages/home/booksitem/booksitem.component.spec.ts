import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksitemComponent } from './booksitem.component';

describe('BooksitemComponent', () => {
  let component: BooksitemComponent;
  let fixture: ComponentFixture<BooksitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
