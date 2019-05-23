import { Component, OnInit } from '@angular/core';
import { DrinksService, Drinks} from '../../service/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

drinksArea: Drinks[] = [] ;

  constructor(private _drinksService:DrinksService) {
    console.log('bebidas listas para usarse!');
    
   }

  ngOnInit() {
    this.drinksArea = this._drinksService.getDrinks();
    console.log(this.drinksArea);
    
  }

}



