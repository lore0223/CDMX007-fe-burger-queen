
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './components/food/food.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { ComplementsComponent } from './components/complements/complements.component';
import { DrinksComponent } from './components/drinks/drinks.component';

const app_routes : Routes = [
    {path : 'food' , component : FoodComponent},
    {path : 'breakfast', component: BreakfastComponent},
    {path : 'complements', component: ComplementsComponent},
    {path : 'drinks', component: DrinksComponent},
    {path : '**', pathMatch: 'full', redirectTo: 'food'}

];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});