import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-submit',
  outputs: ['onSubmit'],
  template: `
    <div class="col-lg-3">
      <h4>Add another burger:</h4>
      <label>Burger Name: </label>
      <input placeholder="Name" #newName>
      <label>Meal Type: </label>
      <input placeholder="Type" #newType>
      <label>Burger Calories: </label>
      <input type="number" placeholder="Calories" #newCalories>
      <label>Burger Description: </label>
      <input placeholder="Description" #newDescription>
      <button class="btn btn-default" (click)="submitMeal(newName, newType, newCalories, newDescription)">Log that Burger!</button>
    </div>
  `
})
export class MealSubmitComponent {
  public onSubmit: EventEmitter<any[]>;
  constructor(){
    this.onSubmit = new EventEmitter();
  }
  submitMeal(newName: HTMLInputElement, newType: HTMLInputElement, newCalories: HTMLInputElement, newDescription: HTMLInputElement) {
    this.onSubmit.emit([newName.value, newType.value, parseInt(newCalories.value), newDescription.value])
  }
}
