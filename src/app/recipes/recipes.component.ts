import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: Recipe = {
    id: 1,
    name: "Porridge",
    description: "Put 50g porridge oats in a saucepan, pour in 350ml milk or water and sprinkle in a pinch of salt. Bring to the boil and simmer for 4-5 minutes, stirring from time to time and watching carefully that it doesn't stick to the bottom of the pan. Or you can try this in a microwave."
  }
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
