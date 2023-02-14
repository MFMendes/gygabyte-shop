import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PRODUTOS_FORM } from 'src/app/produto/formularios/produtos.form';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss'],
})
export class CadastroProdutosComponent implements OnInit {
  
  public formProdutos!: FormGroup;
  public categoriaSelecionada!: number;

  public categorias = [
    { Description: "Informática", Value: 1  },
    { Description: "Games", Value: 2  }
  ]

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.inicializaFormulario();
  }
  
  public inicializaFormulario(): void {
    this.formProdutos = this.formBuilder.group(PRODUTOS_FORM);
  }
}