
export class Tip{
    constructor(
        public tipteamid: number,
        public ateamid: number,
        public gameid: number, 
        public err:string,
        public year: number,
        public hconfidence: string, 
        public round: number, 
        public date:string, 
        public margin: string,
        public venue: string, 
        public hmargin: string, 
        public updated: string,
        public source: string,
        public bits: string,
        public hteam: string,
        public confidence: string,
        public tip: string,
        public hteamid: number,
        public sourceid: number,
        public ateam: string,
        public correct: number
    ){}
}