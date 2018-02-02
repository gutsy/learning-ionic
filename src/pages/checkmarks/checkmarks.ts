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
    this.items.push({title: 'Olives', gross: true});
    this.items.push({title: 'Sun Dried Tomatoes', gross: false});

  }

  itemChecked(item) {

    let index = this.selectedItems.indexOf(item);
    if (index === -1) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems.splice(index, 1);
    }

    this.checkPizza();

  }

  checkPizza() {
    let grossItemFound = false;
     this.selectedItems.forEach( item => {
        if (item.gross) {
          grossItemFound = true;
        }
     });

     this.pizzaIsGross = grossItemFound;
  }


}
