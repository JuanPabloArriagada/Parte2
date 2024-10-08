import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { Router } from '@angular/router';
import { Receta } from 'src/app/interfaces/receta';
import { IonList } from '@ionic/angular';
import { LocalDBService } from '../../services/local-db.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  id: string = '';
  lista_receta: Receta[]=[];
  titulo: string ='';
  id_receta: string = '';

  constructor(
    private dataService:DataserviceService, 
    private router:Router, 
    private db:LocalDBService) { }

  ngOnInit() {
    let datosextra = this.router.getCurrentNavigation()?.extras.state;
    if(datosextra !== undefined){
      this.id = datosextra["id_receta"];
      this.cargarReceta(this.id);
    }
  }

  cargarReceta(id:string){
    this.dataService.getRecetas(id).subscribe(datos=>{
      this.lista_receta.push(...datos.meals)
      this.id_receta = this.lista_receta[0].idMeal;
      this.titulo = this.lista_receta[0].strMeal;
  })
  }


  favoritos(){
    console.log(this.id_receta);
    this.db.guardar(this.id_receta, "hola")
  }
}
