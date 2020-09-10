import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListarService } from '../lista/listar.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  municipios: [] | null;

  displayedColumns: string[] = ['localizacionId', 'descripcion'];

  constructor(
    public dialogRef: MatDialogRef<MostrarComponent>,
    @Inject(MAT_DIALOG_DATA) public content: any,
    public _service: ListarService
  ) {
  }

  ngOnInit(): void {
    this._service.getMunicipios(this.content.localizacionId);

    this._service.onMunicipiosChanged.subscribe(
      (response) => {
        this.municipios = response;
      }
    );
  }

}
