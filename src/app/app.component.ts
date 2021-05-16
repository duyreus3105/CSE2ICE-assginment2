import { Component, Output, SimpleChanges,Input, OnInit,EventEmitter } from '@angular/core';
import { DataService } from './teamData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  favoriteTeam :string="";
  title = 'FootballWebsite';

  ngOnChanges(changes: SimpleChanges){
    if(changes['selectedTeam'])
    console.log("success");
  }
  constructor(private dataService : DataService){}
  ngOnInit(){
  };

  receiveMessage(event:any){
    this.favoriteTeam = event;
  }

}
