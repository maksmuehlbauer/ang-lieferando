import { Component, inject } from '@angular/core';
import { MealsService } from '../../meals.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-meal-cards',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './meal-cards.component.html',
  styleUrl: './meal-cards.component.scss'
})
export class MealCardsComponent {

  mealService = inject(MealsService)

}
