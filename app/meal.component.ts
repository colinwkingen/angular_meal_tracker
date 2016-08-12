import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="container row well">
      <div class="col-md-12">
        <h2>{{ meal.name }} - {{ meal.type }} - {{ meal.calories.toString() }}</h2>
      </div>
      <div class="col-md-12">
        <h3>Description : </h3>
        <h4>{{ meal.description }}</h4>
      </div>
    </div>
  `

})
export class MealComponent {
  public meal: Meal;
}
