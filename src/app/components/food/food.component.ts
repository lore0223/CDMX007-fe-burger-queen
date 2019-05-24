import { Component, OnInit } from '@angular/core';
import { BurgerService, Burger}  from '../../service/burgerq.service'
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

burgerArea:Burger[] = []  ;

  constructor( private _burgerService:BurgerService,
              private _orderService:OrderService) { 

    console.log('constructor');
    
  }
  ngOnInit() {

    this.burgerArea=this._burgerService.getBurgerQueen();
    //console.log(this.burgerArea);
    
  }
  
  product:object;

  public increment(){
    //console.log('incrementando');
    this._orderService.incrementValue();
  }

  public searchItem( index ){
    this.burgerArea.forEach(element => {
      if(this.burgerArea.indexOf(element) == index){
        this.product=element;
        console.log(this.product)
        this._orderService.getProduct(this.product);
      }
    })
  }

}

