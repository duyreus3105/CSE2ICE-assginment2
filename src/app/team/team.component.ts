import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  chosenTeam!:Team;
  @Input() selectedTeam:string="";
  winVenue = " ";
  
  @Output() clearTeam = new EventEmitter<string>();

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
    this.getGame();
    this.getTip();
    this.checkUnselected(); 
    this.unPredicted = true;
    this.unselected = true;
  }

  checkUnselected():boolean{
    if(this.selectedTeam != ""){
      this.getTeamName(this.selectedTeam);
      this.getTeamResults();
      this.getNextFourGame();
      this.getWinVenue();
    }
    return this.unselected;
  }
  
  getTeamName(name:string)
  {
    this.chosenTeam = (this.teams.filter(t => t.name == name))[0];
    this.unselected = false;
  }
  
  getWinVenue(){
    let temp : String[] = [];
    this.games.forEach(game => {
      if(this.chosenTeam.name == game.winner){
        if(!temp.includes(game.venue,0))  
        {
          temp.push(game.venue);
        }
        
      }
    });
    temp.forEach(venue=>{
      this.winVenue = this.winVenue + venue + ", ";
    });
    this.winVenue = this.winVenue.substring(0,this.winVenue.lastIndexOf(","));
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


