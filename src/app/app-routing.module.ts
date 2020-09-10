import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { ListarService } from './componentes/lista/listar.service';


const routes: Routes = [
  {
    path: '',
    component: ListaComponent,
    resolve: {
      data: ListarService
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },


  { path: 'login', component: LoginComponent },

];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule,
  ],

  providers: [
    ListarService,
  ],
})
export class AppRoutingModule { }
