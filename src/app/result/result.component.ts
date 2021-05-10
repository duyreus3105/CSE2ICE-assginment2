import { Component, OnInit } from '@angular/core';
import {teamLadder} from "C:/Users/a/Desktop/FootballWebsite/src/app/teamLadder";
// import * as $ from "jquery";
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  teams : teamLadder[] = [];
  fill(teamToAdd: teamLadder[]){
    $.getJSON("https://api.squiggle.com.au/?q=ladder;year=2021;round=8;source=1",function(data){
      $.each(data.ladder,function(i,t){
        var element = new teamLadder(t.rank, t.team, t.round, t.wins);
        teamToAdd.push(element);
      })
      teamToAdd.sort(function(a,b){
        if(a.rank > b.rank){return 1;}
        else if(a.rank < b.rank){return -1}
        return 0;
      })
    })
  }
  constructor() { 
    this.fill(this.teams);
  }

  ngOnInit(): void {
  }

}
