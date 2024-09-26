import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { Categoria } from 'src/app/interfaces/comidas';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  Categoria_home:Categoria[]=[];


  constructor(private dataService:DataserviceService) { }

  ngOnInit() {
    console.log("On Init");
    this.dataService.getCategorias().subscribe(datos=> {
      console.log(datos);

      console.log("LISTA DE COMIDAS")
      this.Categoria_home.push(...datos.categories)/* Trae todos los datos (push) */
      console.log(this.Categoria_home)
    })
  }

}
