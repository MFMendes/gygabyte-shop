export class ProdutoReponse {
    public Id!: number; 
    public Descricao!: string;
    public Categoria!: number;
    public Quantidade!: number;
    public Preco!: number;
    public Files !: File[];

    constructor(params: Partial<ProdutoReponse>) {
        this.Id != params.Id;
        this.Descricao != params.Descricao;
        this.Categoria != params.Categoria;
        this.Quantidade != params.Quantidade;
        this.Preco != params.Categoria;
        this.Files != params.Files;
    }
}