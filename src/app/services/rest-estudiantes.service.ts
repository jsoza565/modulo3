import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestEstudiantesService {
  private apiUrl = "http://localhost:3000/estudiantes";

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  guardarEstudiante(estudiante: any): Observable<any>{
    return this.http.post(this.apiUrl, estudiante);
  }
   

}
