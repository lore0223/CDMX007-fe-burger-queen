import { Injectable } from '@angular/core';

@Injectable( )
export class ComplementsService{

    private complements:Complements[] = [
        {
            "id" : 13,
            "nombre" : "Papas a la francesa",
            "costo" : 15,
            "complementos" : true,
            "img" : "assets/imgns/patatas-fritas.png"
        },  
        {
            "id" : 14  ,
            "nombre" : "Aros de cebolla",
            "costo" : 15,
            "complementos" : true,
            "img" : "assets/imgns/aros-de-cebolla.png"
        },  

    ]


    constructor ( ) {
        console.log('servicio complements listo para usar!!');        
    }

    getComplements(){
        return this.complements;
    }
}

export interface Complements{
    id:            number;
    nombre:        string;
    costo:         number;
    complementos:  boolean;
    img:           string;
}