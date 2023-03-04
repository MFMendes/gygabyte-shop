import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutosComponent } from 'src/app/gerenciamento/paginas/cadastro-produtos/cadastro-produtos.component';
import { MenuComponent } from './paginas/menu/menu.component';

const routes: Routes = [
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "cadastro-produtos",
    component: CadastroProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GerenciamentosRouteModule { }
