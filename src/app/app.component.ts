import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favoriteTeam :string = "";
  title = 'FootballWebsite';
  addFavoriteTeam(name : HTMLInputElement){
    this.favoriteTeam = name.value;
  }
}
