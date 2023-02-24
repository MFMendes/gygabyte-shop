export class ProdutoRequest {
    public Descricao!: string;
    public Categoria!: number;
    public Quantidade!: number;
    public Preco!: number;
    public Files !: File[];

    constructor(params: Partial<ProdutoRequest>) {
        this.Descricao = params.Descricao || '';
        this.Categoria != params.Categoria || null;
        this.Quantidade != params.Quantidade || null;
        this.Preco != params.Preco || null;
        this.Files != params.Files || [];
    }
}