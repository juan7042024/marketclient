import { ProcesarPedidoService } from './../../service/procesar-pedido.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { Producto } from 'src/app/model/Producto';

@Component({
  selector: 'app-procesar-pedido',
  templateUrl: './procesar-pedido.component.html',
  styleUrls: ['./procesar-pedido.component.css']
})
// asi se creo "ng g c /controller/ProcesarPedido --skip-tests"
export class ProcesarPedidoComponent implements OnInit {
  // crear el objeto de tipo array para la categoria y de producto
  categorias:Categoria[];
  productos:Producto[];
  //
  idCategoriaSel:number;

  // el constructor se ejecuta cuando se crea una instancia del componente
  constructor(private ProcesarPedidoService:ProcesarPedidoService){
    // OnInit, we ejecuta cuando el componente esta disponible,
  }

  // OnInit, se ejecuta cuando el componente esta disponible hacia el usuario,
  // es donde nos comunicamos hacia la capa de servicio
  ngOnInit(): void {
    //cargamos el contenido de las categorias
    this.ProcesarPedidoService.categorias().subscribe(c=>this.categorias=c);
  }

  // cargar los productos localizables por categoria
  productosCategoria(){
    // cargar el contenido para este html del componente
    this.ProcesarPedidoService.productosCategorias(this.idCategoriaSel).subscribe(p=>this.productos=p);
  }



}
