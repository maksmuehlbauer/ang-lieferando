import { Component, inject } from '@angular/core';
import { MealsService } from '../meals.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-basket',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    
  ],
  templateUrl: './shopping-basket.component.html',
  styleUrl: './shopping-basket.component.scss'
})
export class ShoppingBasketComponent {

  mealService = inject(MealsService)
  minimumOrderValue: number = 18
  showInfoText: boolean = true

  constructor(private router: Router) {}


  payOrder() {
    this.router.navigate(['/paymentDialog'])
  }

  
  checkMinOrder(): boolean {
    return this.mealService.calculateTotalCost() >= this.minimumOrderValue ? false : true;
  }


  checkDisable(): string {
    return this.mealService.calculateTotalCost()>= this.minimumOrderValue ? '' : 'disable-btn-color'
  }


  calculateRequiredAmount():number {
    let requiredAmount = this.minimumOrderValue - this.mealService.calculateTotalCost() 
    return requiredAmount 
  }




}
