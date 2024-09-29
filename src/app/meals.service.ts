import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor() { }

meals = [
    {
        "name": "Pizza Salami",
        "ingridients": "Tomatensoße, Käse, Salami",
        "price": 9.00
    },
    {
        "name": "Pizza Della Casa",
        "ingridients": "Tomatensoße, Käse, Paprika, Zwiebeln, Schinken",
        "price": 11.00
    },
    {
        "name": "Pizza Lampedusa",
        "ingridients": "Tomatensoße, Käse, Salami, Oliven, Paprika",
        "price": 9.50
    },
    {
        "name": "Pizza Hawaii",
        "ingridients": "Tomatensoße, Käse, Ananas, Schinken",
        "price": 12.00
    },
    {
        "name": "Pizza Spinaci",
        "ingridients": "Tomatensoße, Käse, Spinat",
        "price": 8.00
    },
    {
        "name": "Pizza Bolognese",
        "ingridients": "Tomatensoße, Käse, Hackfleisch",
        "price": 9.00
    },
    {
        "name": "Pizza Diavolo",
        "ingridients": "Tomatensoße, Käse, Chorizo, Peperoni",
        "price": 10.50
    },
    {
        "name": "Pizza Original",
        "ingridients": "Tomatensoße, Mozzarella",
        "price": 9.00
    },
]
}
