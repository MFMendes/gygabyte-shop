import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ProdutoReponse } from "src/app/produto/models/responses/produto.response";
import { ProdutoRequest } from "src/app/produto/models/resquests/produto.request";

@Injectable({
    providedIn: 'root'
})
export class ProdutosService {
    private urlBase = environment.api;

    constructor(private http: HttpClient) { }

    public inserir(request: ProdutoRequest): Observable<ProdutoReponse> {
        return this.http.post<ProdutoReponse>(`${this.urlBase}/products`, request);
    }   
}