import { Injectable } from '@angular/core';

@Injectable( )
export class DrinksService{

    private drinks:Drinks[] = [
        {
            "id" : 15,
            "nombre" : "Refresco",
            "costo" : 15,
            "bebidas" : true,
            "img" : "assets/imgns/cocacola.png"
        }, 
        {
            "id" : 16,
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

export interface Drinks{
    id :       number;
    nombre:    string;
    costo:     number;
    bebidas:   boolean;
    img:       string;
}