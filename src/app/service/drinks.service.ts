import { Injectable } from '@angular/core';

@Injectable( )
export class DrinksService{

    private drinks:any = [
        {
            "id" : 9,
            "nombre" : "Refresco",
            "costo" : 15,
            "bebidas" : true,
            "img" : "assets/imgns/cocacola.png"
        }, 
        {
            "id" : 10,
            "nombre" : "Agua",
            "costo" : 15,
            "bebidas" : true,
            "img" : "assets/imgns/agua.png"
        }
        
    ]


    constructor ( ) {
        console.log('servicio de bebidas listo para usar!!');        
    }

    getDrinks(){
        return this.drinks;
    }
}
