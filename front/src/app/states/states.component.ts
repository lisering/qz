import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { StateListComponent } from '../state-list/state-list.component';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
