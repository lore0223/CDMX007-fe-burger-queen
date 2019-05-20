import { Component, OnInit } from '@angular/core';
import { ComplementsService } from '../../service/complements.service';

@Component({
  selector: 'app-complements',
  templateUrl: './complements.component.html',
  styleUrls: ['./complements.component.css']
})

export class ComplementsComponent implements OnInit {

complementsArea:any = {};

  constructor(private _complementsService:ComplementsService) { 
    console.log('servicio de complementos');
    
    
  }

  ngOnInit() {
    this.complementsArea = this._complementsService.getComplements();
    console.log(this.complementsArea)
  }

}
