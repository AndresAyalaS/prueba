import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { registerLocaleData } from '@angular/common';
import localeCo from '@angular/common/locales/es-CO';
import { ListarService } from './listar.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';
registerLocaleData(localeCo, 'co');

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  departamentoCtrl = new FormControl();

  departamentosOptions: any[];
  municipios: any[];

  dataSource: any[];
  displayedColumns: string[] = ['localizacionId', 'descripcion'];

  constructor(
    public _service: ListarService,
    private _router: Router,
    private _matDialog: MatDialog,
  ) {
    this.departamentosOptions = this._service.onItemsChanged.value;
  }

  ngOnInit(): void {
    // this._service.onItemsChanged.subscribe(
    //   (response) => {
    //     this.dataSource = response;
    //   }
    // );
  }

  mostrarHandle(event): void {
    this._service.getMunicipios(event.value.localizacionId);
    this._service.onMunicipiosChanged.subscribe(
      (response) => {
        if (response) {
          this.dataSource = response;
        }
      }
    );
  }

}
