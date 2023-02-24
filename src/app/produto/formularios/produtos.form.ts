import { Validators } from "@angular/forms";

export const PRODUTOS_FORM = {
    Descricao: ['', Validators.required],
    Categoria: [null, Validators.required],
    Quantidade: [1, Validators.required],
    Preco: [null, Validators.required],
    Files: [null, Validators.required]
};