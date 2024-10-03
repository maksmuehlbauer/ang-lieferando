import { Component, inject, HostListener, ViewChild ,Renderer2, ElementRef } from '@angular/core';
import { MealsService } from '../../meals.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


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

  @ViewChild('basketContainer') basketContainer!: ElementRef;
  mealService = inject(MealsService);
  windowWidth: number = 900;
  scrollTriggerY: number = 80;
  minimumOrderValue: number = 18;
  showInfoText: boolean = true;
  showBasket = false;
  hideCounter = false
  

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollY = window.scrollY;
    if (scrollY >= this.scrollTriggerY) {
      this.renderer.setStyle(this.basketContainer.nativeElement, 'top', '0');
    } else {
      this.renderer.setStyle(this.basketContainer.nativeElement, 'top', '80px');
    }
  }


  hideBasketCounter():string {
    return this.mealService.shoppingBasket.length < 1 ? 'd-none' : ''
  }


  toggleBasket() {
    if (window.innerWidth < this.windowWidth) {
      this.showBasket = !this.showBasket // switches between true and false
    }
  }


  openBasket() {
    return this.showBasket ? 'show-basket' : ''
  }


  payOrder() {
    this.mealService.payAccepted = true
    console.log('pay Order', this.mealService.payAccepted)
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
