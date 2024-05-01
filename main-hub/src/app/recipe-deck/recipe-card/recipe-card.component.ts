import { Component } from '@angular/core';

@Component({
  selector: 'recipe-card',
  standalone: true,
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  expanded = false;

  title = "Recipe Title";
  ingrediants = [
    ["amnt", "ingrediant1"],
    ["amnt", "ingrediant2"]
  ];
  steps = [
    "Step1",
    "Step2"
  ];
}
