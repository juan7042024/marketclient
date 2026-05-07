import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
// asi lo creamos -> "ng g s /service/Registrar --skip-tests"
export class RegistrarService {

  constructor(private http:HttpClient) { }

  // metodo de registrarse que devuelve un observable como respuesta,
  registrar(cliente:Cliente):Observable<any>{

    // conectarnos al endpoint
    let url = "http://localhost:8000/registrar";
    // mandamos hacia el protocolo el post
    return this.http.post(url, cliente);
  }
}
