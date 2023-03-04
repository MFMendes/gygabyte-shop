import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { CadastroProdutosComponent } from './paginas/cadastro-produtos/cadastro-produtos.component';
import { GerenciamentosRouteModule } from './gerenciamentos-route.module';
import { NgxMaskModule } from 'ngx-mask';
import { MenuComponent } from './paginas/menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
    CadastroProdutosComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GerenciamentosRouteModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot()
  ]
})
export class GerenciamentosModule { }
