import { Injectable } from '@angular/core';

@Injectable( )
export class BurgerService {

    private burgerqueen:Burger[] = [
           
        {
            "id" : 5,
            "nombre" : "Sencilla Res",
            "costo" : 40,
            "hamburguesas" : true,
            "img" : "assets/imgns/hamburguesasen.png"
        },
        {
            "id" : 6,
            "nombre" : "Doble Res",
            "costo" : 55,
            "hamburguesas" : true,
            "img" : "assets/imgns/hamburguesadob.png"
        },  
        {
            "id" : 7,
            "nombre" : "Sencilla Pollo",
            "costo" : 40,
            "hamburguesas" : true,
            "img" : "assets/imgns/hamburguesasen.png"
        },  
        {
            "id" : 8,
            "nombre" : "Doble Pollo",
            "costo" : 40,
            "hamburguesas" : true,
            "img" : "assets/imgns/hamburguesadob.png"
        },  
        {
            "id" : 9,
            "nombre" : "Sencilla Vegetariana",
            "costo" : 40,
            "hamburguesas" : true,
            "img" : "assets/imgns/hamburguesasen.png"
        },   
        {
            "id" : 10,
            "nombre" : "Doble Vegetariana",
            "costo" : 55,
            "hamburguesas" : true,
            "img" : "assets/imgns/hamburguesadob.png"
        },  
        {
            "id" : 11,
            "nombre" : "Extra queso",
            "costo" : 15,
            "hamburguesas" : true,
            "img" : "assets/imgns/queso.png"
        },  
        {
            "id" : 12,
            "nombre" : "Huevo",
            "costo" : 15,
            "hamburguesas" : true,
            "img" : "assets/imgns/huevo-frito.png"
        },  
           
]

    constructor ( ) {
        console.log('servicio listo para usar!!');        
    }

    getBurgerQueen(){
        return this.burgerqueen;
    }
}

export interface Burger{
    id:     number;
    nombre: string;
    costo:  number;
    hamburguesas:boolean;
    img:    string;
}