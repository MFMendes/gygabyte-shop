import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoSelecionadoComponent } from 'src/app/produto/paginas/produto-selecionado/produto-selecionado.component';
import { StepperCompraComponent } from './paginas/stepper-compra/stepper-compra.component';

const routes: Routes = [
  {
    path: "", 
    component: ProdutoSelecionadoComponent
  },
  {
    path: "carrinho",
    component: StepperCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProdutosRouteModule { }
