import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ImagemReponse } from "../models/responses/imagem.response";

var headers = new Headers();
headers.append('Content-Type', 'multipart/form-data');

@Injectable({
    providedIn: 'root'
})
export class ImagensService {
    private urlBase = environment.api;

    constructor(private http: HttpClient) { }

    public listarImagens(idProduto: number): Observable<ImagemReponse> {
        return this.http.get<ImagemReponse>(`${this.urlBase}/images/${idProduto}`);
    }   
}