import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  
    contador : number = 0;
    burgers  : any [ ]= [];
    newArr   : any;

    constructor() { }
   
    public incrementValue(){
      console.log('Contador aumentando');
      return this.contador++;
      
    }

    public getProduct(item){
      this.burgers.push(item)
      console.log(this.burgers);
      }
  
    public delete( index ) {
      this.burgers.forEach(element=>{
        if(this.burgers.indexOf(element)== index){
        this.newArr = element.splice(index,1);
        console.log(this.newArr);
        
        }
      })
      
    } 
  
  
    }
  
