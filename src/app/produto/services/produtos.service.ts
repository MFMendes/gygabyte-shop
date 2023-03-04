import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ProdutoReponse } from "src/app/produto/models/responses/produto.response";

var headers = new Headers();
headers.append('Content-Type', 'multipart/form-data');

@Injectable({
    providedIn: 'root'
})
export class ProdutosService {
    private urlBase = environment.api;

    constructor(private http: HttpClient) { }

    public inserir(formData: FormData): Observable<ProdutoReponse> {
        return this.http.post<ProdutoReponse>(`${this.urlBase}/products`, formData);
    }
    
    public recuperar(id: number): Observable<ProdutoReponse> {
        return this.http.get<ProdutoReponse>(`${this.urlBase}/products/${id}`);
    } 
}