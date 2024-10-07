import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { Router } from '@angular/router';
import { Receta } from 'src/app/interfaces/receta';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  id: string = '';
  lista_receta: Receta[]=[];
  titulo: string ='';
  lista_ingredientes:IonList[]=[];
  lista_pasos:IonList[]=[];

  constructor(private dataService:DataserviceService, private router:Router) { }

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
  })
  }

  
}
