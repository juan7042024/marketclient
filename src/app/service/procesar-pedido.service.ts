import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcesarPedidoService {

  // importar el httpClient que vamos a usar en modo privado
  constructor(private http:HttpClient) { }

  // metodo para poder listar las categorias
  categorias():Observable<any>{ // devolver un observable de rxjs
    let url = "http://localhost:8000/categorias";
    return this.http.get(url);
  }

  productosCategorias(idCategoria:number):Observable<any>{
    let url="http://localhost:8000/productos";
    // enviar el parametro de idCategoria en la peticion
    let params=new HttpParams();
    //guardar el valor de "idCategoria" en "params"
    params = params.append("idCategoria", idCategoria);
    //devolver el url con el parametro hacia la vista
    return this.http.get(url, {"params":params});
  }
}
