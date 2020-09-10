import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgFallimgModule } from 'ng-fallimg';

import { MenuComponent } from './componentes/menu/menu.component';
import { MaterialModule } from './models/material/material.module';
import { NgxMaskModule } from 'ngx-mask';

import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,
  MatListModule,
  MatDialogModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatTabsModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MAT_DATE_LOCALE,
  MatDividerModule,
  MatBadgeModule,
  MatPaginatorIntl,
  MatAutocompleteModule,
  DateAdapter,
  MAT_DATE_FORMATS,
} from '@angular/material';

import { CommonModule } from '@angular/common';
import { MatPaginatorEs } from 'src/@material/matpaginatores';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './componentes/lista/lista.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';

const DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'DD MMMM YYYY',
  },
};


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    MenuComponent,
    LoginComponent,
    MostrarComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgxMaskModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    MatMenuModule,

    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDividerModule,
    MatDialogModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatListModule,
    HttpClientModule,

    BrowserModule,
    BrowserAnimationsModule

  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorEs },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MostrarComponent
  ] // Auque se retire sigue funcionando
})
export class AppModule { }
