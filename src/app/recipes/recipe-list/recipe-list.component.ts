import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('hamburger', 'tasty', 'https://www.kuechengoetter.de/uploads/media/1800x1200/09/24729-hamburger-zum-selber-bauen.jpg?v=1-0')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
