export class ProdutoReponse {
    public id!: number; 
    public nome!: string;
    public descricao!: string;
    public categoria!: number;
    public quantidade!: number;
    public preco!: number;
    public files !: File[];

    constructor(params: Partial<ProdutoReponse>) {
        this.id != params.id;
        this.descricao != params.descricao;
        this.categoria != params.categoria;
        this.quantidade != params.quantidade;
        this.preco != params.categoria;
        this.files != params.files;
    }
}