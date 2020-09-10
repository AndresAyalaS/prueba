import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, PageEvent } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { map } from 'rxjs/operators';

import { registerLocaleData } from '@angular/common';
import localeCo from '@angular/common/locales/es-CO';
import { ListarService } from './listar.service';
import { Router } from '@angular/router';
import { Observable, merge } from 'rxjs';
import { MostrarComponent } from '../mostrar/mostrar.component';
registerLocaleData(localeCo, 'co');

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  dataSource: [] | null;
  displayedColumns: string[] = ['localizacionId', 'descripcion', 'accion'];

  constructor(
    public _service: ListarService,
    private _router: Router,
    private _matDialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this._service.onItemsChanged.subscribe(
      (response) => {
        this.dataSource = response;
      }
    );
  }

  mostrarHandle(event, content): void {
    const dialogRef = this._matDialog.open(MostrarComponent, {
      panelClass: 'mostrar-dialog',
      disableClose: false,
      data: content
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

}
