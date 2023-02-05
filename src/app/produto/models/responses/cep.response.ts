export class CepResponse {
    public bairro!: string;
    public localidade !: string;
    public logradouro !: string;
    public uf !: string;
    public erro!: boolean;

    constructor(params: Partial<CepResponse>) {
        this.bairro != params.bairro;
        this.localidade != params.localidade;
        this.logradouro != params.logradouro;
        this.uf != params.uf;
        this.erro != params.erro;
    }
}