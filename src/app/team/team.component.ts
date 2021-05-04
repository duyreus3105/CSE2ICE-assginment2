import { HttpClient } from '@angular/common/http';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Event } from '@angular/router';
import {Team} from '../team';
import { DataService } from '../teamData.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams!:Team[];

  constructor(private dataService:DataService) {}

  getTeam():void{
    this.dataService.getTeams().subscribe(temp => {this.teams = temp;});
  }

  ngOnInit(): void {
    this.getTeam();
  }
  
  unselected :boolean = true;

  chosenTeam!:Team;
  getTeamID(id:number)
  {
    this.chosenTeam = this.teams.find(t => t.id == id);
    this.unselected = false;
  }

  return(){
    this.unselected = true;
  }
  
}
