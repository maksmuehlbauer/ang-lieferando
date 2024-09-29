import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-comnpany-information',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule],
  templateUrl: './comnpany-information.component.html',
  styleUrl: './comnpany-information.component.scss'
})
export class ComnpanyInformationComponent {

}
