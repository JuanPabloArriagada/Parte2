import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { NavigationExtras, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/Categorias';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  Categoria_home:Categoria[]=[];
  tipo: String = '';


  constructor(private dataService:DataserviceService, private router:Router) { }

  ngOnInit() {
    console.log("On Init");
    this.dataService.getCategorias().subscribe(datos=> {
      console.log(datos);

      console.log("LISTA DE COMIDAS")
      this.Categoria_home.push(...datos.categories)/* Trae todos los datos (push) */
      console.log(this.Categoria_home)
    })
  }

  ver_comidas(tipo:string){
    let xtr:NavigationExtras={
      state:{
        tipo_categoria:tipo
      }
    }
    this.router.navigate(['/comidas'], xtr)
  }
}

