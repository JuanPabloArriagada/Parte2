import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpCliente:HttpClient) { }

  getCategorias(){
    return this.httpCliente.get(`https://www.themealdb.com/api/json/v1/1/categories.php`); /* las ` se ponen con alt gr + ]}` */
  }
}
