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

  constructor(private messageService: MessageService) { }
}
