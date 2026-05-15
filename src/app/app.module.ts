import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './controller/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrarComponent } from './controller/registrar/registrar.component';
import { ProcesarPedidoComponent } from './controller/procesar-pedido/procesar-pedido.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    ProcesarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // importamos el FormsModule para poder usar el ngModel en el formulario de login.component.html
  ],
  providers: [],
  // bootstrap es la vista que se muestra al iniciar la aplicacion, en este caso es el AppComponent, que es el componente principal de la aplicacion, y dentro del AppComponent se muestra el LoginComponent, que es el componente de login, y se muestra el mensaje de bienvenida o error dependiendo de la respuesta del metodo de login del servicio de login
  // tambien declararlo en el "index.html" para que se muestre al iniciar la aplicacion, y se muestra el mensaje de bienvenida o error dependiendo de la respuesta del metodo de login del servicio de login
  bootstrap: [RegistrarComponent]
})
export class AppModule { }
