import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://127.0.0.1:5000/';

  criarModalidade(nome: string, genero: string, unidadePontuacao: string, descricao: string, tipo: string) {
    return this.http.post(`${this.apiUrl}modalidade`,
      { nome: nome, genero: genero, unidadePontuacao: unidadePontuacao, descricao: descricao, tipo: tipo }
    );
  }

  constructor(private http: HttpClient) { }
}
