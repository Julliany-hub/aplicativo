import { Component } from '@angular/core';
import { Jogadores } from './Jogadores';
import { JogadoresserviceService } from 'src/app/services/jogadoresservice.service';


@Component({
  selector: 'app-jogadores',
  templateUrl:'./jogadores.component.html',
  styleUrls: ['./jogadores.component.css']
})
export class JogadoresComponent {

  constructor(private Jogadoresservice: JogadoresserviceService){
    this.getJogadores()
  }


  ngOnInit():void{}

  private _jogadores: Jogadores[] = [];
  public get jogadores(): Jogadores[] {
    return this._jogadores;
  }
  public set jogadores(value: Jogadores[]) {
    this._jogadores = value;
  }

  getJogadores():void{
    this.Jogadoresservice.getAll().subscribe((Jogadores) => (this.jogadores = Jogadores));
  }

}
