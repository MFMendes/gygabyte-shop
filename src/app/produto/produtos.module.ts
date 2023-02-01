import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoSelecionadoComponent } from './paginas/produto-selecionado/produto-selecionado.component';

import { ProdutosRouteModule } from './produtos-route.module';
import { SwiperModule } from 'swiper/angular';
import { StepperCompraComponent } from './paginas/stepper-compra/stepper-compra.component';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    ProdutoSelecionadoComponent,
    StepperCompraComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ProdutosRouteModule,
    SwiperModule,
    MatStepperModule
  ]
})
export class ProdutosModule { }
