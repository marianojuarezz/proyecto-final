import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LamparasComponent } from './lamparas/lamparas.component';
import { RouterModule, Routes } from '@angular/router';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosComponent } from './gestiones/crud/productos/productos.component';
import { NotFound404Component } from './not-found404/not-found404.component';
const routes: Routes = [
  
    {
      path : '',
      component : PresentacionComponent
    },
  
  {
    path : 'lamparas',
    component : LamparasComponent
  },

  {
    path : 'carrito',
    component : CarritoComponent
  },
 
  {
    path : 'gestiones/crud/productos',
    component : ProductosComponent
  },

  {
    path : '**',
    component : NotFound404Component
  }


]


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class AppRoutingModule { }
