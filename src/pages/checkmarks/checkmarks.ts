import { Component } from '@angular/core';



@Component({
  selector: 'page-checkmarks',
  templateUrl: 'checkmarks.html',
})
export class CheckmarksPage {

  items: Array<{title: string, gross: boolean}>;
  selectedItems: Array<{title: string, gross: boolean}>;
  pizzaIsGross: boolean;

  constructor() {
    this.items = [];
    this.selectedItems = [];
    this.pizzaIsGross = false;
    this.items.push({title: 'Pepperoni', gross: false});
    this.items.push({title: 'Mushrooms', gross: false});
    this.items.push({title: 'Banana Peppers', gross: false});
    this.items.push({title: 'Dead Salty Fish', gross: true});
    this.items.push({title: 'Sausage', gross: false});
    this.items.push({title: 'Sliced Up Eyeballs', gross: true});
    this.items.push({title: 'Sun Dried Tomatoes', gross: false});

  }

  itemChecked(item) {

    let index = this.selectedItems.indexOf(item);
    if (index === -1) {
      if (item.gross) {
        this.pizzaIsGross = true;
      }
      this.selectedItems.push(item);
    } else {
      this.selectedItems.splice(index, 1);
      this.pizzaIsGross = this.isNotDeliciousPizza();
    }

  }

  isNotDeliciousPizza() {
     this.selectedItems.forEach( item => {
        if (item.gross) {
          console.log("there's a gross one still here.")
          return true;
        }
     });

     return false;
  }


}
