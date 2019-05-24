import { Component, OnInit } from '@angular/core';
import { DrinksService, Drinks} from '../../service/drinks.service';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

drinksArea: Drinks[] = [] ;

  constructor(private _drinksService:DrinksService,
              private _orderService:OrderService) {
    
   }

  ngOnInit() {
    this.drinksArea = this._drinksService.getDrinks();
    console.log(this.drinksArea);
    
  }

  product:object;

  public searchItem( index ){
    this.drinksArea.forEach(element => {
      if(this.drinksArea.indexOf(element) == index){
        this.product=element;
        console.log(this.product)
        this._orderService.getProduct(this.product);
      }
    })
  }

}



