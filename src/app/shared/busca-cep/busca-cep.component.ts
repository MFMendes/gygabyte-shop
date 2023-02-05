import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepResponse } from 'src/app/produto/models/responses/cep.response';
import { BuscaCepService } from './busca-cep.service';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.scss']
})
export class BuscaCepComponent implements OnInit {

  public formCep!: FormGroup;
  public numeroCep: string = "";
  public cepResponse: CepResponse = new CepResponse({});
  public cepExists: boolean = false;
  public message: string = "";
  
  constructor(
    private formBuilder: FormBuilder, 
    private buscaCepService: BuscaCepService
  ) {}

  ngOnInit(){
    this.inicializaFormulario();
  }

  public inicializaFormulario(): void {
    this.formCep = this.formBuilder.group({
      Cep: ["", [Validators.required]]
    });
  }

  public recuperaCep(): void {
    this.numeroCep = this.formCep.get("Cep")?.value;

    if (this.numeroCep != "") {
      this.buscaCepService.recuperar(this.numeroCep)
        .subscribe((dados: CepResponse)  => {
          if (dados.erro === true) {
            this.message = "CEP não encontrado!";
            this.cepExists = false;
          } else {
            this.cepResponse = dados;
            this.cepExists = true;
          }
        })
    } else {
      this.message = "Digite um CEP válido"
    }
  }
}