import { Component, OnInit } from '@angular/core';

import { GetAllStatesService } from '../get-all-states.service';

import { State } from '../state';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {

  states: Array<State>;

  constructor(private _getAllStatesService: GetAllStatesService) { }

  ngOnInit() {
    this._getAllStatesService.GetAllStates()
        .subscribe(res => this.states = res.allstates);
  }

}
