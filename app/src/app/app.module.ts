import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LamparasComponent } from './lamparas/lamparas.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { LamparaComponent } from './lamparas/lampara/lampara.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarritoComponent } from './carrito/carrito.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleLamparaComponent } from './lamparas/detalle-lampara/detalle-lampara.component';
import { CarrouselComponent } from './componentes/carrousel/carrousel.component';
import { ProductosComponent } from './gestiones/crud/productos/productos.component';
import { NewProductComponent } from './gestiones/crud/new-product/new-product.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { GraciasPorSucompraComponent } from './gracias-por-sucompra/gracias-por-sucompra.component';
import { ClientesComponent } from './gestiones/crud/clientes/clientes.component';
import { NewClientComponent } from './gestiones/crud/new-client/new-client.component';
import { ToastsContainer } from './componentes/toast/toast/toast.component';


@NgModule({
  declarations: [
    AppComponent,
    LamparasComponent,
    PresentacionComponent,
    LamparaComponent,
    CarritoComponent,
    NavbarComponent,
    EncabezadoComponent,
    FooterComponent,
    LoginComponent,
    DetalleLamparaComponent,
    CarrouselComponent,    
    ProductosComponent,
    NewProductComponent,
    NotFound404Component,
    CheckOutComponent,
    GraciasPorSucompraComponent,
    ClientesComponent,
    NewClientComponent,
    ToastsContainer

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
