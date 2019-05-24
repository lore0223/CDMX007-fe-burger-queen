import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../service/order.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(private _orderService:OrderService,){

   }
    
    
  ngOnInit() {
 
  }

  getproducts(){
    return this._orderService.burgers;
  }

 
}
