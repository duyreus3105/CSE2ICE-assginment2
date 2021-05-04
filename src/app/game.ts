export class Game{
    constructor(
        public hteam:string,
        public localtime : string,
        public venue:string,
        public winner:string,
        public complete: number,
        public ateamid:number, 
        public hgoals:number,
        public abehinds:number,
        public is_final:number,
        public ascore:number,
        public winnerteamid:number,
        public date:string,
        public id: number,
        public year: number,
        public is_grand_final:number,
        public ateam: string,
        public update: string,
        public tz:string,
        public roundname: string,
        public hteamid:number,
        public agoals:number,
        public hbehinds:number,
        public hscore:number,
        public round: number
    ){}
}