import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filtra-acomodacoes',
  templateUrl: './filtra-acomodacoes.component.html',
  styleUrls: ['./filtra-acomodacoes.component.css']
})
export class FiltraAcomodacoesComponent implements OnInit {


  checkoutformlocal = this.formbuilder.group({local:'',});

  constructor(private formbuilder:FormBuilder) {}

  ngOnInit() {
  }
onSubmit(): void {}

}