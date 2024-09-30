import { Component, inject } from '@angular/core';
import { MealsService } from '../meals.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-shopping-basket',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './shopping-basket.component.html',
  styleUrl: './shopping-basket.component.scss'
})
export class ShoppingBasketComponent {

  mealService = inject(MealsService)

  payOrder() {
    console.log('pay')
  }

}
