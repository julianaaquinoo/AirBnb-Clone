import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AcomodacaoListComponent } from './acomodacoes-list.component/acomodacoes-list.component';
import { FiltrarComponent } from './filtrar.component/filtrar.component';



@NgModule({
  imports:      [ BrowserModule,  FormsModule,RouterModule.forRoot ([{path:'',component:AcomodacaoListComponent}]) ],
  declarations: [ AppComponent, HelloComponent, AcomodacaoListComponent, FiltrarComponent, ],
  bootstrap:    [ AppComponent ], 
  
})
export class AppModule { }
