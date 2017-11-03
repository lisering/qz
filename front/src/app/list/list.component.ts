import { Component, OnInit } from '@angular/core';
import { GetAllStatesService } from '../get-all-states.service';
import { State } from '../state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  states: Array<State>;

  constructor(private _getAllStatesService: GetAllStatesService) { }

  ngOnInit() {
    this._getAllStatesService.GetAllStates().subscribe(res => {
      this.states = res.allstates;
    });
  }

}
