import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { RestEstudiantesService } from '../../../services/rest-estudiantes.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [NavbarComponent, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {

  formularioEstudiante = new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    edad: new FormControl(0,Validators.required),
    carrera: new FormControl('',Validators.required)
  });

  constructor(private servicio_rest: RestEstudiantesService, private router: Router){}

  guardarEstudiante(){
    
    this.servicio_rest.guardarEstudiante(
      {       
        "nombre": this.formularioEstudiante.value.nombre,
        "apellido": this.formularioEstudiante.value.apellido,
        "edad": this.formularioEstudiante.value.edad,
        "carrera": this.formularioEstudiante.value.carrera
    }
    ).subscribe(datos =>{
      alert("El nuevo estudiante fue guardado correctamente");
      this.router.navigate(['/dashboard']);
    });
  }
}
