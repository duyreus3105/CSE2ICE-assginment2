import { Component, OnInit, Input, Output } from '@angular/core';
import {Team} from '../team';
import { DataService } from '../teamData.service';
import {Game} from '../game';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams!:Team[];
  unselected !:boolean;
  games!:Game[];
  @Input() chosenTeam!:Team;

  constructor(private dataService:DataService) {}

  getTeam():void{
    this.dataService.getTeams().subscribe(temp => {this.teams = temp;});
  }
  getGame():void{
    this.dataService.getGame().subscribe(temp => {this.games = temp;})
  }

  ngOnInit(): void {
    this.getTeam();
    this.unselected = true; 
    this.getGame();
  }
  
  getTeamID(id:number)
  {
    this.chosenTeam = (this.teams.filter(t => t.id == id))[0];
    this.unselected = false;
  }

  return(){
    this.unselected = true;
  }
  getNextFourGame(){
    //
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
  
}
