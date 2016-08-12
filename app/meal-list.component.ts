import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { MealSubmitComponent } from './meal-submit.component';

@Component({
  selector: 'meal-list',
  directives: [ MealComponent, MealSubmitComponent ],
  inputs: [ 'meals'],
  template: `
    <div>
      <meal-submit (onSubmit)="newMeal($event)"></meal-submit>
      <meal-display *ngFor="#eachMeal of meals" [meal]="eachMeal" ></meal-display>
    </div>
  `

})
export class MealListComponent {
  public meals: Meal[]
  constructor(){
  }
  newMeal(args: any[]) {
    this.meals.push(
      new Meal(args[0], args[1], args[2], args[3])
    );
  }
}
