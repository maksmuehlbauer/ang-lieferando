import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MealsService } from '../meals.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  public mealsService = inject(MealsService)

  constructor(private router:Router) {}

  continueShopping() {
    this.router.navigate(['/root'])
    this.mealsService.shoppingBasket = []
  }

}
