export class ImagemReponse {
    public id!: number;
    public content!: string; 

    constructor(params: Partial<ImagemReponse>) {
        this.id != params.id;
        this.content != params.content;
    }
}