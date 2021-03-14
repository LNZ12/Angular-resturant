import {EventEmitter, Inject, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('hamburger', 'tasty', 'https://www.kuechengoetter.de/uploads/media/1800x1200/09/24729-hamburger-zum-selber-bauen.jpg?v=1-0'
    ,
      [new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)

      ]),
    new Recipe('pancake', 'tasty', 'https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg'
      ,
      [new Ingredient('Orange', 2),
        new Ingredient('Apple', 14)

      ]),
  ];

  constructor(private slService: ShoppingListService) {
  }

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppinglist(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }




}
