import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../service/order.service';
  

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( private _orderService:OrderService) { }

  ngOnInit() {
  }
getProductsTicket(){
  return this._orderService.addElements(this._orderService.burgers);
}
   
}
