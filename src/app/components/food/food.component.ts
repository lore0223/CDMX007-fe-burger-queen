import { Component, OnInit } from '@angular/core';
import { BurgerService }  from '../../service/burgerq.service'


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

burgerArea:any = {}  ;

  constructor( private _burgerService:BurgerService) { 
    console.log('constructor');
    
  }

  ngOnInit() {

    this.burgerArea=this._burgerService.getBurgerQueen();
    console.log(this.burgerArea);
    
  }

}
