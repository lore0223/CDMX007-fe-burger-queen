import { Injectable } from '@angular/core';

@Injectable( )
export class BreakfastService{

    private breakfast:any = [
        {
            "id" : 1,
            "nombre" : "Sandwich de jamón y queso",
            "costo"  : 35,
            "desayunos" : true,
            "img" : "assets/imgns/sandwich.png"
        },
        {
            "id" : 2,
            "nombre" : "Jugo Natural",
            "costo" : 15,
            "desayunos" : true,
            "img" : "assets/imgns/zumo-de-naranja.png"
        },
        {
            "id" : 3,
            "nombre" : "Café americano",
            "costo" : 20,
            "desayunos" : true,
            "img" : "assets/imgns/taza-para-café.png"
        },  
        {
            "id" : 4,
            "nombre" : "Café con leche",
            "costo" : 28,
            "desayunos" : true,
            "img" : "assets/imgns/capuchino.png"
        }
    ]


    constructor ( ) {
        console.log('servicio breakfast listo para usar!!');        
    }

    getBreakfast(){
        return this.breakfast;
    }
}
