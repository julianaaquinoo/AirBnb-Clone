import { Component, OnInit } from '@angular/core';
import { acomodacoes } from '../acomodacoes';

@Component({
  selector: 'app-acomodacoes-list',
  templateUrl: './acomodacoes-list.component.html',
  styleUrls: ['./acomodacoes-list.component.css']
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