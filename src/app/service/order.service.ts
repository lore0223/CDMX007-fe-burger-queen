import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  
    contador : number = 0;
    burgers  : any [ ]= [];
  

    constructor( ) { }
   
    public incrementValue(){
      console.log('Contador aumentando');
      return this.contador++;
    }

    public getProduct(item){
      this.burgers.push(item)
      console.log(this.burgers);
      }
      
      inicial:number = 0;
      add:number;

      addElements(array:any[]){
        if(array.length != this.inicial){
          this.add = 0;
          for(let total of array)
          this.add += total.costo;
          return this.add;
        }
      }
  
    public delete( index ) {
      this.burgers.forEach(element=>{
        if(this.burgers.indexOf(element)=== index){
        this.burgers.splice(index,1);
        console.log(this.burgers);
        
        }
      })
      
    } 
  
  
    }
  
