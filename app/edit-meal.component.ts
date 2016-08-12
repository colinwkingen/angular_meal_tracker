import { Component} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <h3>Change Burger Information</h3>
  <label>Change Name : </label>
  <input [(ngModel)]="meal.name">
  <label>Change Type : </label>
  <input [(ngModel)]="meal.type">
  <label>Lie to Yourself About Calories :</label>
  <input [(ngModel)]="meal.calories">
  <label>Change Description : </label>
  <input [(ngModel)]="meal.calories">

  <button (click)="addReview(newRating)">Rate</button>
  `
})
