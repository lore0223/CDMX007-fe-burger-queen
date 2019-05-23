import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//RUTAS
import {app_routing} from './app.routes';

//SERVICIOS
import { BurgerService } from './service/burgerq.service';
import { BreakfastService } from './service/breakfast.service';
import { ComplementsService } from './service/complements.service';
import { DrinksService } from './service/drinks.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FoodComponent } from './components/food/food.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { ComplementsComponent } from './components/complements/complements.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { TicketComponent } from './components/shared/ticket/ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FoodComponent,
    FooterComponent,
    BreakfastComponent,
    ComplementsComponent,
    DrinksComponent,
    TicketComponent,
    
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    BurgerService,
    BreakfastService,
    ComplementsService,
    DrinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
