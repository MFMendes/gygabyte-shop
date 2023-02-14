import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-produto-selecionado',
  templateUrl: './produto-selecionado.component.html',
  styleUrls: ['./produto-selecionado.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProdutoSelecionadoComponent implements OnInit {
  
  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {
    
  }
  
  public confirmarCompra(): void {
    this.router.navigate(['/carrinho'])
  }
}