import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const recipes = [
      { id: 11,
      name: "Porridge",
      description: "Put 50g porridge oats in a saucepan, pour in 350ml milk or water and sprinkle in a pinch of salt. Bring to the boil and simmer for 4-5 minutes, stirring from time to time and watching carefully that it doesn't stick to the bottom of the pan. Or you can try this in a microwave." 
      },
      { id: 12,
      name: "Fried egg",
      description: "In a small nonstick over medium heat, melt butter (or heat oil). Crack egg into pan. Cook 3 minutes, or until white is set. Flip and cook 2 to 3 minutes more, until yolk is completely set." 
      },
      { id: 13,
      name: "Cooced rice",
      description: "Bring the water to boil in a medium saucepan. Add the salt and butter and allow the butter to melt.When the water has returned to a boil, stir in the rice.When the rice is cooked, turn off the heat and let it sit for another couple of minutes to finish absorbing any liquid." 
      },
      { id: 14,
      name: "Boiled egg",
      description: "Place eggs in a medium pot and cover with cold water by 1 inch. Bring to a boil, then cover the pot and turn the heat off. Let the eggs cook, covered, for 9 to 12 minutes, depending on your desired done-ness (see photo). Transfer the eggs to a bowl of ice water and chill for 14 minutes." 
      },
  ];
  return {recipes};
  }

  genId(recipes: Recipe[]): Number {
    return recipes.length > 0 ? Math.max(...recipes.map(rec => rec.id)) + 1 : 11; 
  }
}
