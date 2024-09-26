import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/comidas';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpCliente:HttpClient) { }

  getCategorias(){
    return this.httpCliente.get<Categorias>(`https://www.themealdb.com/api/json/v1/1/categories.php`); /* las ` se ponen con alt gr + ]}` */
  }
}
