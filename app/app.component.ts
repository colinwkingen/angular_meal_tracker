import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';
import { MealComponent } from './meal.component';


@Component({
  selector: 'my-app',
  directives: [ MealListComponent, MealComponent ],
  template: `
    <h1 id="page_head" class="page-header">My Burger Pal</h1>
    <div class="container row">
      <meal-submit></meal-submit>
      <meal-list [meals]="meals"></meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal('Cheeseburger', 'Breakfast', 460, "I always cheeseburger."),
      new Meal('Hamburger', 'Lunch', 410, "I always cheeseburger."),
      new Meal('Teriyaki Burger', 'Snack', 540, "I always cheeseburger."),
      new Meal('Double Cheeseburger', 'Dinner', 610, "I always cheesburger.")
    ];
  }
}
