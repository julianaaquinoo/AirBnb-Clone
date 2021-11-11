import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AcomodacaoListComponent } from './acomodacoes-list.component/acomodacoes-list.component';
import { FiltrarComponent } from './filtrar/filtrar.component';
import { FiltraAcomodacoesComponent } from './filtra-acomodacoes/filtra-acomodacoes.component';



@NgModule({
  imports:      [ BrowserModule,  FormsModule,RouterModule.forRoot ([{path:'',component:AcomodacaoListComponent}, {path: 'filter', component:FiltraAcomodacoesComponent}]) ],
  declarations: [ AppComponent, HelloComponent, AcomodacaoListComponent, FiltrarComponent,FiltraAcomodacoesComponent ],
  bootstrap:    [ AppComponent ], 
  
})
export class AppModule { }
