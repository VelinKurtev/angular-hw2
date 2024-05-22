import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRaterComponent } from './book-rater.component';

describe('BookRaterComponent', () => {
  let component: BookRaterComponent;
  let fixture: ComponentFixture<BookRaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookRaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookRaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
