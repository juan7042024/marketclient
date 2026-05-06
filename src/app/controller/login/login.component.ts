import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login', // nombre del selecto de este componente, se puede usar en el html de otros componentes para mostrar este componente
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// se creo asi -> "ng g c /controller/Login --skip-tests" para crear el componente de login sin el archivo de pruebas, y se importo el servicio de login en el controlador de login.component.ts, y se inyecto el servicio en el constructor del controlador de login.component.ts, y se creo un metodo para llamar al metodo de login del servicio de login, y se llamo al metodo de login del servicio de login en el metodo del controlador de login.component.ts, y se manejo la respuesta del metodo de login del servicio de login en el metodo del controlador de login.component.ts
export class LoginComponent {
  usuario:string; // variable para almacenar el usuario ingresado en el formulario de login
  password:string; // variable para almacenar la contraseña ingresada en el formulario de login
  client:Cliente; // validar que si es null o no el cliente, para mostrar un mensaje de error en el html de login.component.html


// inyectar el servicio de login en el constructor del controlador de login.component.ts
  constructor(private loginService:LoginService) {

   }


   // metodo para gestionar la respuesta
   login(){
    // se llama al metodo de login del servicio de login, y se maneja
    //la respuesta del metodo de login del servicio de login en el metodo del controlador de login.component.ts
    // se suscribe a la capa de servicio de login, y se maneja la respuesta del metodo de login del servicio de login en el metodo del controlador de login.component.ts
    this.loginService.login(this.usuario,this.password).subscribe(data => {
      this.client=data; // se asigna la respuesta del metodo de login del servicio de login a la variable client, para validar que si es null o no el cliente, para mostrar un mensaje de error en el html de login.component.html
      if(this.client!=null){ // si el cliente no es null, se muestra un mensaje de bienvenida en el html de login.component.html
        alert("Bienvenido "+this.client.nombre); // se muestra un mensaje de bienvenida en el html de login.component.html
      }else{ // si el cliente es null, se muestra un mensaje de error en el html de login.component.html
        alert("Usuario o contraseña incorrectos"); // se muestra un mensaje de error en el html de login.component.html
      }
    });
    
   }


}
