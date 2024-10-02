import { Component, inject } from '@angular/core';
import { ComnpanyInformationComponent } from './comnpany-information/comnpany-information.component';
import { MealCardsComponent } from './meal-cards/meal-cards.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { PayFeedbackComponent } from "./pay-feedback/pay-feedback.component";
import { CommonModule } from '@angular/common';
import { MealsService } from '../meals.service';


@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [
    ComnpanyInformationComponent,
    MealCardsComponent,
    ShoppingBasketComponent,
    PayFeedbackComponent,
    CommonModule
],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

  mealService = inject(MealsService)


}
