import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MealsService } from '../../meals.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pay-feedback',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule
  ],
  templateUrl: './pay-feedback.component.html',
  styleUrl: './pay-feedback.component.scss'
})
export class PayFeedbackComponent {

  mealsService = inject(MealsService)

  constructor() {}

  continueShopping() {
    this.mealsService.shoppingBasket = []
    this.mealsService.payAccepted = false;
    console.log('continue', this.mealsService.payAccepted)

  }

}
