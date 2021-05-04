import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { ResultComponent } from './result/result.component';
import {TeamComponent} from  "./team/team.component"

const routes: Routes = [
  {path:"team", component : TeamComponent},
  {path:"game", component: GameComponent },
  {path:"result",component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
