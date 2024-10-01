import { Injectable } from '@angular/core';

interface BasketItem {
    name: string;
    ingridients: string;
    quantity: number;
    price: number;
}


@Injectable({
  providedIn: 'root'
})
export class MealsService {

    public shoppingBasket: BasketItem[] = [ ];
    continueShopping: boolean = false

    constructor() { }

    meals = [
        {
            "name": "Pizza Salami",
            "ingridients": "Tomatensoße, Käse, Salami",
            "quantity": 0,
            "price": 9.00
        },
        {
            "name": "Pizza Della Casa",
            "ingridients": "Tomatensoße, Käse, Paprika, Zwiebeln, Schinken",
            "quantity": 0,
            "price": 11.00
        },
        {
            "name": "Pizza Lampedusa",
            "ingridients": "Tomatensoße, Käse, Salami, Oliven, Paprika",
            "quantity": 0,
            "price": 9.50
        },
        {
            "name": "Pizza Hawaii",
            "ingridients": "Tomatensoße, Käse, Ananas, Schinken",
            "quantity": 0,
            "price": 12.00
        },
        {
            "name": "Pizza Spinaci",
            "ingridients": "Tomatensoße, Käse, Spinat",
            "quantity": 0,
            "price": 8.00
        },
        {
            "name": "Pizza Bolognese",
            "ingridients": "Tomatensoße, Käse, Hackfleisch",
            "quantity": 0,
            "price": 9.00
        },
        {
            "name": "Pizza Diavolo",
            "ingridients": "Tomatensoße, Käse, Chorizo, Peperoni",
            "quantity": 0,
            "price": 10.50
        },
        {
            "name": "Pizza Original",
            "ingridients": "Tomatensoße, Mozzarella",
            "quantity": 0,
            "price": 9.00
        },
    ]

    addToBasket(meal: BasketItem) {
        const existingItem = this.shoppingBasket.find(item => item.name === meal.name)
        if(existingItem) {
              existingItem.quantity += 1;
        } else {
            this.shoppingBasket.push({...meal, quantity: 1}) //... add object to basket and set quantity to 1
          }
    }

    switchCounter(symb: boolean, index: number) {
        const meal = this.shoppingBasket[index];
        if (symb) {
            meal.quantity += 1;
        } else if (meal.quantity <= 1) {
            this.deleteFromBasket(index)
        } else if (meal.quantity > 0) {
            meal.quantity -= 1;
        }
    }


    calculateTotalCost() {
        let totalSum = 0
        for (let i = 0; i < this.shoppingBasket.length; i++) {
            const meal = this.shoppingBasket[i];
            totalSum += meal.quantity * meal.price;           
        }
        return totalSum
    }


    calculateItemCost(meal: BasketItem) {
        let itemCost = meal.quantity * meal.price
        return itemCost

    }


    deleteFromBasket(index: number) {
        return this.shoppingBasket.splice(index, 1)
    }



}
