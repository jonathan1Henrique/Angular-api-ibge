import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../estado.service';

@Component({
  selector: 'estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  estados:any = []
  constructor(private estadoService:EstadoService) { }

  ngOnInit() {
    this.estadoService.getEstado().subscribe(
      response => {
        this.estados = response;
      }
    )
  }

}
