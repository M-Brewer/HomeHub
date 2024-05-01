import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDeckComponent } from './recipe-deck.component';

describe('RecipeDeckComponent', () => {
  let component: RecipeDeckComponent;
  let fixture: ComponentFixture<RecipeDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeDeckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
