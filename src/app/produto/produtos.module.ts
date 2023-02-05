import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoSelecionadoComponent } from './paginas/produto-selecionado/produto-selecionado.component';

import { ProdutosRouteModule } from './produtos-route.module';
import { SwiperModule } from 'swiper/angular';
import { StepperCompraComponent } from './paginas/stepper-compra/stepper-compra.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BuscaCepComponent } from '../shared/busca-cep/busca-cep.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    ProdutoSelecionadoComponent,
    StepperCompraComponent,
    BuscaCepComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ProdutosRouteModule,
    SwiperModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class ProdutosModule { }
