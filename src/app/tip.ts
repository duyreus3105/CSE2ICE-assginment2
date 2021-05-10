
export class Tip{
    constructor(
        public tip: string,
        public sourceid: number,
        public ateam: string, 
        public hconfidence:string,
        public correct: string,
        public year: number, 
        public gameid: number, 
        public hteam:string, 
        public tipteamid: number,
        public margin: string, 
        public ateamid: number, 
        public hmargin: string,
        public confidence: string,
        public updated: string,
        public round: number,
        public err: string,
        public hteamid: number,
        public bits: string,
        public venue: string,
        public source: string,
        public date: string
    ){}
}