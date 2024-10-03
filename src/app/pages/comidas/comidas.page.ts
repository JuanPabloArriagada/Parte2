import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/interfaces/lista-comidas';
import { Router } from '@angular/router';
import { DataserviceService } from '../../services/dataservice.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.page.html',
  styleUrls: ['./comidas.page.scss'],
})
export class ComidasPage implements OnInit {

  titulo: string = '';
  Lista_comidas:Meal[]=[];

  constructor(private router: Router, private dataService: DataserviceService) { }

  ngOnInit() {
    let datosextra = this.router.getCurrentNavigation()?.extras.state;
    if (datosextra !== undefined) {
      this.titulo = datosextra["tipo_categoria"];
      this.cargarComidas(this.titulo);  // Pasar 'this.titulo' como parámetro
    }
  }

  cargarComidas(tipo: string) {  // Recibir el parámetro 'tipo'
    this.dataService.getComidas(tipo).subscribe(datos => {
      console.log(datos);
      this.Lista_comidas.push(...datos.meals)  // Asignar los datos recibidos a la lista de comidas
    });
  }
}
