import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PRODUTOS_FORM } from 'src/app/produto/formularios/produtos.form';
import { ProdutoReponse } from 'src/app/produto/models/responses/produto.response';
import { ProdutoRequest } from 'src/app/produto/models/resquests/produto.request';
import { ProdutosService } from 'src/app/produto/services/produtos.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss'],
})
export class CadastroProdutosComponent implements OnInit {
  
  public formProdutos!: FormGroup;
  public categoriaSelecionada!: number;

  public request = new ProdutoRequest({});

  public categorias = [
    { Description: "Informática", Value: 1  },
    { Description: "Games", Value: 2  }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutosService,
    private toastr: ToastrService
  ) { }

  public ngOnInit(): void {
    this.inicializaFormulario();
  }
  
  public inicializaFormulario(): void {
    this.formProdutos = this.formBuilder.group(PRODUTOS_FORM);
  }

  public inserir(): void {
    this.request = this.formProdutos.value;

    this.produtoService.inserir(this.request)
      .subscribe((response: ProdutoReponse) => {
        this.toastr.success('Produto adicionado com sucesso!', '');
      })
  }
}