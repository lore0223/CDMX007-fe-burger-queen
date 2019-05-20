import { Injectable } from '@angular/core';

@Injectable( )
export class ComplementsService{

    private complements:any = [
        {
            "id" : 11,
            "nombre" : "Papas a la francesa",
            "costo" : 15,
            "complementos" : true,
            "img" : "assets/imgns/patatas-fritas.png"
        },  
        {
            "id" : 12,
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
