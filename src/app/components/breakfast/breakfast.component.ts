import { Component, OnInit } from '@angular/core';
import { BreakfastService, Breakfast }  from '../../service/breakfast.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  breakfastArea:Breakfast[] = [] ;

  constructor(private _breakfastService:BreakfastService) {
    console.log('breakfast constructor');
    
   }

  ngOnInit() {
    this.breakfastArea = this._breakfastService.getBreakfast();
    console.log(this.breakfastArea);
    
  }

}

