import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { RegistrarService } from 'src/app/service/registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  // declaracion de los valores del cliente para instanciarlo
  cliente:Cliente=new Cliente();
  // en el constructor llamamos al servicio
  constructor(private registrarService:RegistrarService){

  }

  //evento al hacer clik en registrarse
  registrar (){ // traemos el service metiendo dentro la instancia del cliente para suscribirnos y mandar un mensaje
    this.registrarService.registrar(this.cliente).subscribe({
      next:data=>alert("Usuario registrado"),
      error:err=>alert("Usuario ya existe, no se pudo registrar!"),
  });
  }
}
