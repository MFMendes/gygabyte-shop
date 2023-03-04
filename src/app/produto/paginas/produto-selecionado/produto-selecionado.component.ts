import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ImagemReponse } from '../../models/responses/imagem.response';
import { ProdutoReponse } from '../../models/responses/produto.response';
import { ImagensService } from '../../services/imagens.service';
import { ProdutosService } from '../../services/produtos.service';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-produto-selecionado',
  templateUrl: './produto-selecionado.component.html',
  styleUrls: ['./produto-selecionado.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProdutoSelecionadoComponent implements OnInit {
  
  public responseImagem: any;
  public responseProduto: ProdutoReponse = new ProdutoReponse({});

  constructor(
    private router: Router,
    private imagemService: ImagensService,
    private produtoService: ProdutosService
  ) { }

  public ngOnInit(): void {
    this.recuperaImagensProduto();
    this.recuperaProduto();
  }
  
  public confirmarCompra(): void {
    this.router.navigate(['/carrinho'])
  }

  public cadastrar(): void {
    this.router.navigate(['/cadastro-produtos'])
  }

  public recuperaProduto(): void {
    this.produtoService.recuperar(1)
      .subscribe((response: ProdutoReponse) => {
        this.responseProduto = response;
      })
  }

  public recuperaImagensProduto(): void {
    this.imagemService.listarImagens(1)
      .subscribe((response: ImagemReponse) => {
        this.responseImagem = response;
      })
  }
}