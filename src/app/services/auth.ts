import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  // URL do nosso backend NestJS
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  // Observable é um "fluxo de dados" que podemos observar para obter a resposta da API
  login(credentials: {email: string, password: string}): Observable<any>{
    return this.http.post(`${this.apiUrl}/signin`, credentials);
  }
}
