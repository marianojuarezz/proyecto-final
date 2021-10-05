import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LamparasComponent } from './lamparas/lamparas.component';
import { RouterModule, Routes } from '@angular/router';
import { PresentacionComponent } from './presentacion/presentacion.component';
const routes: Routes = [
  
    {
      path : '',
      component : PresentacionComponent
    },
  
  {
    path : 'lamparas',
    component : LamparasComponent
  }
]


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class AppRoutingModule { }
