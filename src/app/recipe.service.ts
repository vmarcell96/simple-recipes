import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  getRecipes(): Observable<Recipe[]> {
    const recipes = of (RECIPES);
    this.messageService.add('RecipeService: fetched recipes')
    return recipes;
  }

  getRecipe(id: Number): Observable<Recipe> {
    const recipe = RECIPES.find(r => r.id == id)!;
    this.messageService.add(`RecipeService: fetched recipe id=${id}`);
    return of (recipe);
  }

  constructor(private messageService: MessageService) { }
}
