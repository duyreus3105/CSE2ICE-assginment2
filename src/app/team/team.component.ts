import { Component, OnInit, Input, Output } from '@angular/core';
import {Team} from '../team';
import { DataService } from '../teamData.service';
import {Game} from '../game';
import {Tip} from '../tip';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams!:Team[];
  unselected !:boolean;
  games!:Game[];
  tips!:Tip[];
  unPredicted!:boolean;
  @Input() chosenTeam!:Team;

  constructor(private dataService:DataService) {}

  getTeam():void{
    this.dataService.getTeams().subscribe(temp => {this.teams = temp;});
  }
  getGame():void{
    this.dataService.getGame().subscribe(temp => {this.games = temp;})
  }
  getTip():void{
    this.dataService.getTip().subscribe(temp=>{this.tips = temp;})
  }

  ngOnInit(): void {
    this.getTeam();
    this.unselected = true; 
    this.getGame();
    this.getTip();
    this.unPredicted=true;
  }
  
  getTeamID(id:number)
  {
    this.chosenTeam = (this.teams.filter(t => t.id == id))[0];
    this.unselected = false;
  }

  return(){
    this.unselected = true;
    this.unPredicted = true;
  }

  allVenue!:Game[];
  getVenues(id:number){
    this.allVenue = this.games.filter(game => game.winnerteamid == id);
  }
  
  favoriteTeamResult!:Game[]
  getTeamResults(){
    let temp : Game[] = [];
    this.games.forEach(game => {
      if((game.ateam == this.chosenTeam.name || game.hteam == this.chosenTeam.name) && game.complete == 100)
      {
        temp.push(game);
      }
    })
    this.favoriteTeamResult = temp;
  }
  
  
  favoriteTeamNextGames!:Game[];
  getNextFourGame(){
    let temp : Game[] = [];
    this.games.forEach(game => {
      if((game.ateam == this.chosenTeam.name || game.hteam == this.chosenTeam.name) && (game.round == 9 || game.round == 10 || game.round == 11 || game.round == 12))
      {
        temp.push(game);
      }
    })

    temp.sort(function(a,b){
      if(a.round < b.round){return -1;}
      else if(a.round > b.round){return 1;}
      return 0;
    })
    this.favoriteTeamNextGames = temp;
  }


  
  gamePrediction!:Tip;
  getPrediction(id:number){
    this.gamePrediction = this.tips.filter(t => t.gameid == id)[0];
    this.unPredicted = false;
  }
}


