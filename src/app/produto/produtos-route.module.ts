import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoSelecionadoComponent } from 'src/app/produto/paginas/produto-selecionado/produto-selecionado.component';

const routes: Routes = [
    {
        path: "", 
        component: ProdutoSelecionadoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProdutosRouteModule { }
