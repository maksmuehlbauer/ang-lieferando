import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComnpanyInformationComponent } from './comnpany-information/comnpany-information.component';
import { MealCardsComponent } from "./meal-cards/meal-cards.component";
import { ShoppingBasketComponent } from "./shopping-basket/shopping-basket.component";
import { PayFeedbackComponent } from "./pay-feedback/pay-feedback.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatToolbarModule,
    ComnpanyInformationComponent,
    MealCardsComponent,
    ShoppingBasketComponent,
    PayFeedbackComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lieferando';
}
