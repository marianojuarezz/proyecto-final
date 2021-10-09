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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
