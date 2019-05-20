import { Injectable } from '@angular/core';

@Injectable( )
export class BurgerService {

    private burgerqueen:any = [
           
        {
            "id" : 5,
            "nombre" : "Sencilla Res",
            "costo" : 40,
            "hamburguesas" : true,
            "img" : "assets/imgns/hamburguesasen.png"
        },
        {
            "id" : 5,
            "nombre" : "Doble Res",
            "costo" : 55,
            "hamburguesas" : true,
            "img" : "assets/imgns/hamburguesasen.png"
        },  
        {
            "id" : 5,
            "nombre" : "Sencilla Pollo",
            "costo" : 40,
            "hamburguesas" : true,
            "img" : "assets/imgns/hamburguesasen.png"
        },  
        {
            "id" : 5,
            "nombre" : "Doble Pollo",
            "costo" : 40,
            "hamburguesas" : true,
            "img" : "assets/imgns/hamburguesasen.png"
        },  
        {
            "id" : 5,
            "nombre" : "Sencilla Vegetariana",
            "costo" : 40,
            "hamburguesas" : true,
            "img" : "assets/imgns/hamburguesasen.png"
        },   
        {
            "id" : 6,
            "nombre" : "Doble Vegetariana",
            "costo" : 55,
            "hamburguesas" : true,
            "img" : "assets/imgns/hamburguesadob.png"
        },  
        {
            "id" : 7,
            "nombre" : "Extra queso",
            "costo" : 15,
            "hamburguesas" : true,
            "img" : "assets/imgns/queso.png"
        },  
        {
            "id" : 8,
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