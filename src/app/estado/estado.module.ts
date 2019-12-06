import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoComponent } from './estado.component';
import { EstadoRoutingModule } from './estado.routing.module';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [EstadoComponent],
  imports: [
    CommonModule,
    EstadoRoutingModule,
    TableModule
  ]
})
export class EstadoModule { }
