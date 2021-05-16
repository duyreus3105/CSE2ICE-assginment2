import { Component, OnInit,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedTeam = new EventEmitter<string>();

  SearchTeam(name:string){
    this.selectedTeam.emit(name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
