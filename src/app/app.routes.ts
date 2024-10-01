import { Routes } from '@angular/router';
import { PayFeedbackComponent } from './pay-feedback/pay-feedback.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'root', component:AppComponent },
    { path: 'paymentDialog', component:PayFeedbackComponent }
];
