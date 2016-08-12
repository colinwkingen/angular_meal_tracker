import { Component} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <h4>Change Burger Information</h4>
    <label>Change Name: </label>
    <input [(ngModel)]="meal.name">
    <label>Change Type: </label>
    <input [(ngModel)]="meal.type">
    <label>Lie About Calories:</label>
    <input [(ngModel)]="meal.calories">
    <label>Change Description : </label>
    <textarea rows="4" cols="25" [(ngModel)]="meal.description"></textarea>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
