import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path: 'estado',
    loadChildren: './estado/estado.module#EstadoModule'
  },
  { path: '', 
    pathMatch:'full', 
    redirectTo: '/estado'
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
