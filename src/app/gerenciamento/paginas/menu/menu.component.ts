import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PRODUTOS_FORM } from 'src/app/gerenciamento/formularios/produtos.form';
import { ProdutoRequest } from 'src/app/produto/models/resquests/produto.request';
import { ProdutosService } from 'src/app/produto/services/produtos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
  ) { }

  public ngOnInit(): void {
  }

  
}