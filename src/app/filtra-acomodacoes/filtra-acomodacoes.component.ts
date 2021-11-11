import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filtra-acomodacoes',
  templateUrl: './filtra-acomodacoes.component.html',
  styleUrls: ['./filtra-acomodacoes.component.css']
})
export class FiltraAcomodacoesComponent implements OnInit {


  checkoutForm = this.formbuilder.group({local:'',});

  constructor(private formbuilder:FormBuilder) {}

  ngOnInit(): void {
  }
onSubmit(): void {this.checkoutForm.reset()}

}