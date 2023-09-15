import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogadores } from '../home/pages/jogadores/Jogadores';
@Injectable({
  providedIn: 'root'
})
export class JogadoresserviceService {
  private apiUrl = 'http://localhost:3000/jogadores'

  constructor(private http: HttpClient) { }

  getAll(): Observable <Jogadores[]>{
    return this.http.get<Jogadores[]>(this.apiUrl)
  }

}