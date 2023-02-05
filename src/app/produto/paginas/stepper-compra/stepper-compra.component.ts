import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CONTROLES_QUANTIDADE_FORM } from '../../formularios/controles-quantidade.form';

@Component({
  selector: 'app-stepper-compra',
  templateUrl: './stepper-compra.component.html',
  styleUrls: ['./stepper-compra.component.scss']
})
export class StepperCompraComponent implements OnInit {

  public listaTransportadoras = [
    { Description: 'Transportadora Express', Price: 18, DeliveryTime: 10 },
    { Description: 'Transportadora Fast', Price: 25, DeliveryTime: 6 },
    { Description: 'Transportadora Turbo', Price: 35, DeliveryTime: 2 }
  ];
  public quantidade: number = 1;
  public productPrice: number = 2100;
  public totalPrice: number = this.productPrice;
  public deliveryPrice: number = 0;
  public transport: boolean = false;
  
  public isLinear: boolean = false;
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
    this.totalPrice = (this.productPrice * quantidade);
  }
}