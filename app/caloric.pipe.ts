import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "caloricFilter",
  pure: false

})
export class CaloricPipe implements PipeTransform {
  transform = function ( input: Meal[], args ) {
    var result: Meal[] = [];
    for (var i = 0; i < input.length; i++) {
      if ( input[i].calories >= 500 && args[0] === "high") {
        result.push(input[i]);
      } else if ( input[i].calories <= 500 && args[0] && args[0] === "low") {
        result.push(input[i]);
      } else if ( args[0] === "none") {
        result.push( input[i] )
      }
    }
    return result;
  }
}
