import { Component, OnInit } from '@angular/core';
import { BreakfastService, Breakfast }  from '../../service/breakfast.service';
import { OrderService } from '../../service/order.service';

@Component({ 
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  breakfastArea:Breakfast[] = [] ;

  constructor(private _breakfastService:BreakfastService,
              private _orderService:OrderService) { 
   }

  ngOnInit() {
    this.breakfastArea = this._breakfastService.getBreakfast();    
  }
product:object;

  public searchItem( index ){
  this.breakfastArea.forEach(element => {
    if(this.breakfastArea.indexOf(element) == index){
      this.product=element;
      console.log(this.product)
      this._orderService.getProduct(this.product);
    }
  })
  }
}

