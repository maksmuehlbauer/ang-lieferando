import { Component, inject, HostListener, Renderer2, ElementRef } from '@angular/core';
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

  scrollTriggerY: number = 80
  minimumOrderValue: number = 18
  showInfoText: boolean = true

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollY = window.scrollY;
    if (scrollY >= this.scrollTriggerY) {
      this.renderer.setStyle(this.el.nativeElement, 'top', '0');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'top', '80px');
    }
  }

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




//   window.onscroll = function() {
//     let shoppingBasket = document.getElementById('shopping-basket');
//     if (window.scrollY > 0) {
//         shoppingBasket.style = 'top: 0'
//     } else {
//         shoppingBasket.style = 'top: 73px'
//     }
// }




}
