import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { RestEstudiantesService } from '../../services/rest-estudiantes.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

 list_estudiantes:any = [];
  constructor(private servicio_rest: RestEstudiantesService){}
 ngOnInit(): void{
  this.servicio_rest.getEstudiantes().subscribe(datos =>{
    console.log(datos);
    this.list_estudiantes = datos;
    console.log(this.list_estudiantes);

  })
 }
  nombres_columnas: string[] = ['nombre', 'apellido', 'edad', 'carrera'];


}
