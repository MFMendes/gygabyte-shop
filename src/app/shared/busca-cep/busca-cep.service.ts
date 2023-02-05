import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CepResponse } from "../../produto/models/responses/cep.response";

@Injectable({
    providedIn: 'root'
})
export class BuscaCepService {

    constructor(private http: HttpClient) { }

    public recuperar(cep: string): Observable<CepResponse> {
        return this.http.get<CepResponse>(`//viacep.com.br/ws/${cep}/json`);
    }    
}