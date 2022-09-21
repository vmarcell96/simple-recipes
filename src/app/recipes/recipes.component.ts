import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [];
  
  selectedRecipe?: Recipe;

  constructor(private recipeService: RecipeService, private messageService: MessageService) { }
  


  onSelect(recipe: Recipe): void {
  this.selectedRecipe = recipe;
  this.messageService.add(`RecipesComponent: Selected recipe id=${recipe.id}`)
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes)
  }
  

  ngOnInit(): void {
    this.getRecipes();
  }

}
