import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  
    contador : number = 0;
    burgers  : any [ ]= [];
    constructor() { }
   
    public incrementValue(){
      console.log('Contador aumentando');
      return this.contador++;
      
    }

    public getProduct(item){
      this.burgers.push(item)
      console.log(this.burgers);
      }
  
    }
  
