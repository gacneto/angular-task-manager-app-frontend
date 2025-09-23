import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface LoginResponse {
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  // URL do nosso backend NestJS
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  // Observable é um "fluxo de dados" que podemos observar para obter a resposta da API
  login(credentials: {email: string, password: string}): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}/signin`, credentials);
  }

  register(userData: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/signup`, userData);
  }
}
