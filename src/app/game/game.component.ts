import { Component, OnInit } from '@angular/core';
import {DataService} from '../teamData.service'
import {Game} from '../game'
import {FormControl} from '@angular/forms'
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  teamName!:string;
  games !: Game[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getGame();
  }
  getGame():void{
    this.dataService.getGame().subscribe(temp => {this.games = temp;});
  }

  favoriteGames!:Game[]
  checkFavoriteGameEmpty(){
    return this.favoriteGames!=null;
  }
  updateGames(){
    var temp:Game[] = [];
    this.games.forEach(element => {
      if(element.hteam == this.teamName && element.complete == 100){
        temp.push(element);
      }
    });
    this.favoriteGames = temp;
  }

}
