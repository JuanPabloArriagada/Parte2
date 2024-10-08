import { Meal } from './../interfaces/lista-comidas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/Categorias';
import { Receta } from '../interfaces/receta';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpCliente:HttpClient) { }

  getCategorias(){
    return this.httpCliente.get<Categorias>(`https://www.themealdb.com/api/json/v1/1/categories.php`); /* las ` se ponen con alt gr + ]}` */
  }

  getComidas(tipo:string){
    return this.httpCliente.get<Meal>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=`+tipo);
  }

  getRecetas(id_receta:string){
    return this.httpCliente.get<Receta>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=`+id_receta)
  }
}
