import { Component, OnInit } from '@angular/core';
import { Acomodacao, acomodacoes } from '../acomodacoes';

@Component({
  selector: 'app-Acomodacao-list',
  templateUrl: './acomodacao-list.component.html',
  styleUrls: ['./acomodacao-list.component.css']
})
export class AcomodacaoListComponent {
  acomodacoes = acomodacoes;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}