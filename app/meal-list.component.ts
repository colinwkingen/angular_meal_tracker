import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { MealSubmitComponent } from './meal-submit.component';
import { CaloricPipe } from './caloric.pipe';

@Component({
  selector: 'meal-list',
  directives: [ MealComponent, MealSubmitComponent ],
  pipes: [ CaloricPipe],
  inputs: [ 'meals'],
  template: `
    <div class="col-lg-9">
      <select (change)="filterStateCheck($event.target.value)">
        <option value="low">Low Cal Burgers</option>
        <option value="none" selected="selected">Show All</option>
        <option value="high">High Cal Burgers</option>
      </select>
      <meal-submit (onSubmit)="newMeal($event)"></meal-submit>
      <meal-display *ngFor="#eachMeal of meals | caloricFilter:filterState" [meal]="eachMeal" ></meal-display>
    </div>
  `

})
export class MealListComponent {
  public meals: Meal[]
  public filterState: string = "none";
  constructor(){
  }
  newMeal(args: any[]) {
    this.meals.push(
      new Meal(args[0], args[1], args[2], args[3])
    );
  }
  filterStateCheck(filterValue: string) {
    this.filterState = filterValue;
  }
}
