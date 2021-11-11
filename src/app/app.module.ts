import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AcomodacaoListComponent } from './acomodacoes-list.component/acomodacoes-list';



@NgModule({
  imports:      [ BrowserModule,  FormsModule,RouterModule.forRoot ([{path:'',component:AcomodacaoListComponent}]) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ], 
  
})
export class AppModule { }
