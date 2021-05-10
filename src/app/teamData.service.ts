import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Team} from "./team";
import {Game} from "./game";
import { HttpClient } from '@angular/common/http';
import {Tip} from "./tip"
import { data } from "jquery";
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
        return this.http.get('https://api.squiggle.com.au/?q=games;year=2021')
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

    getTip():Observable<Tip[]>{
        return this.http.get("https://api.squiggle.com.au/?q=tips;year=2021")
            .pipe(map((data: any) => data.tips.map((item:any)=>
            new Tip(
                item.tip,
                item.sourceid,
                item.ateam,
                item.hconfidence,
                item.correct,
                item.year,
                item.gameid,
                item.hteam,
                item.tipteamid,
                item.margin,
                item.ateamid,
                item.hmargin,
                item.confidence,
                item.updated,
                item.round,
                item.err,
                item.hteamid,
                item.bits,
                item.venue,
                item.source,
                item.date
            ))))
    }
}