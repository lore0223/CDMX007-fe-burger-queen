import { Component, OnInit } from '@angular/core';
import { ComplementsService, Complements } from '../../service/complements.service';
import { OrderService } from '../../service/order.service';

@Component({ 
  selector: 'app-complements',
  templateUrl: './complements.component.html',
  styleUrls: ['./complements.component.css']
})

export class ComplementsComponent implements OnInit {

complementsArea:Complements[] = [];

  constructor(private _complementsService:ComplementsService,
              private _orderService:OrderService) { 
    console.log('servicio de complementos');
    
    
  }

  ngOnInit() {
    this.complementsArea = this._complementsService.getComplements();
    console.log(this.complementsArea)
  }
product:object;

public searchItem( index ){
  this.complementsArea.forEach(element => {
    if(this.complementsArea.indexOf(element) == index){
      this.product = element;
      console.log(this.product)
      this._orderService.getProduct(this.product);
    }
  })
}
}
