import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PRODUTOS_FORM } from 'src/app/gerenciamento/formularios/produtos.form';
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
  public myFiles: File[] = [];

  public request: ProdutoRequest = new ProdutoRequest({});

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

  public uploadFile(event: any) {
    for (var i = 0; i < event.target.files.length; i++) { 
      this.myFiles.push(event.target.files[i]);
    }
    
    this.formProdutos.patchValue({
      Files: this.myFiles,
    });
    
    this.formProdutos.get('Files')!.updateValueAndValidity();
  }

  public submitForm(): void {
    var formData = new FormData();

    formData.append('Nome', this.formProdutos.get('Nome')!.value)
    formData.append('Descricao', this.formProdutos.get('Descricao')!.value)
    formData.append('Categoria', this.formProdutos.get('Categoria')!.value)
    formData.append('Quantidade', this.formProdutos.get('Quantidade')!.value)
    formData.append('Preco', this.formProdutos.get('Preco')!.value)

    for (var i = 0; i < this.myFiles.length; i++) { 
      formData.append("Files", this.myFiles[i]);
    }

    this.produtoService
      .inserir(formData)
      .subscribe((response) => {
        this.toastr.success("Produto adicionado com sucesso!", "");
        this.formProdutos.reset();
      })
  }
}