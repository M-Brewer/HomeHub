import { Component } from '@angular/core';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@Component({
  selector: 'recipe-deck',
  standalone: true,
  imports: [RecipeCardComponent],
  templateUrl: './recipe-deck.component.html',
  styleUrl: './recipe-deck.component.css'
})
export class RecipeDeckComponent {
  
}
