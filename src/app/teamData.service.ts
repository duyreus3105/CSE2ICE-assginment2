import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Team} from "./team";
import {Game} from "./game";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class DataService{
    constructor(private http: HttpClient){}


    getTeams(): Observable<Team[]>{
        return this.http.get('https://api.squiggle.com.au/?q=teams')
            .pipe(map((data:any)=>data.teams.map((item:any)=>
                new Team(
                    item.id,
                    item.name,
                    item.logo,
                    item.abbrev
                ))))
    }

    getGame():Observable<Game[]>{
        return this.http.get('https://api.squiggle.com.au/?q=games')
            .pipe(map((data:any)=>data.games.map((item:any)=>
                new Game(
                    item.hteam,
                    item.localtime,
                    item.venue,
                    item.winner,
                    item.complete,
                    item.ateamid,
                    item.hgoals,
                    item.abehinds,
                    item.is_final,
                    item.ascore,
                    item.winnerteamid,
                    item.date,
                    item.id,
                    item.year,
                    item.is_grand_final,
                    item.ateam,
                    item.update,
                    item.tz,
                    item.roundname,
                    item.hteamid,
                    item.agoals,
                    item.hbehinds,
                    item.hscore,
                    item.round
                ))))
    }
}