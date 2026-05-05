import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// que sea inyectable en toda la aplicacion y en el controlador de login.component.ts
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // genera un constructor sin parametros, e importamos el httpClient
  constructor(private http:HttpClient) { }

  // metodo para el login, recibe el usuario y la contraseña, y devuelve un observable de cualquier tipo
  login(usuario:string, password:string):Observable<any>{
    // url del backend para autenticar, y se crean los parametros con el usuario y la contraseña, y se hace una peticion get al backend con los parametros
    let url="http://localhost:8000/autenticar";
    //  creamos los parametros con el usuario y la contraseña, y se hace una peticion get al backend con los parametros
    let params=new HttpParams();
    // se agregan los parametros al objeto params, y se hace una peticion get al backend con los parametros
    params=params.append("usuario",usuario);
    // se agregan los parametros al objeto params, y se hace una peticion get al backend con los parametros
    params=params.append("password",password);
    // se hace una peticion get al backend con los parametros, y se devuelve el resultado
    return this.http.get(url,{params:params});
  }
}
