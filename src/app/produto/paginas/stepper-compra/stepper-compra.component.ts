import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CONTROLES_QUANTIDADE_FORM } from '../../formularios/controles-quantidade.form';

@Component({
  selector: 'app-stepper-compra',
  templateUrl: './stepper-compra.component.html',
  styleUrls: ['./stepper-compra.component.scss']
})
export class StepperCompraComponent implements OnInit {

  public isLinear: boolean = false;
  
  public quantidade: number = 1;
  public precoProduto: number = 2100;
  public precoTotalDaCompra: number = this.precoProduto;

  public formQuantidade!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.inicializaFormulario();
  }

  public inicializaFormulario(): void {
    this.formQuantidade = this.formBuilder.group(CONTROLES_QUANTIDADE_FORM);
  }

  public adiciona(): void {
    this.quantidade++;
    this.calculaPrecoTotalDacompra(this.quantidade)
  }

  public remove(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
    this.calculaPrecoTotalDacompra(this.quantidade)
  }

  public calculaPrecoTotalDacompra(quantidade: number): void {
    this.precoTotalDaCompra = this.precoProduto * quantidade;
  }
}